import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DetailWrap from "../../components/DetailWrap";
import Name from "../../components/Name";
import Title from "../../components/Title";
import styled from "styled-components";
import SubmitButton from "../../components/SubmitButton";
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import { saveAs } from "file-saver";

const InputText = styled.input`
  all: unset;
  padding: 5px;
  width: 50%;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

const Withdraw = (): JSX.Element => {
  const [data, setData] = useState<any>(null);

  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit = (data: any) => {
    setData({
      case_number: `${data.case_number}`,
      category: `${data.category}`,
      plaintiff: `${data.plaintiff}`,
      defendant: `${data.defendant}`,
      creation_date: `${data.creation_date}`,
      courthouse: `${data.courthouse}`,
      court: `${data.court}`,
    });
    reset();
  };

  useEffect(()=>{
    if (data) {
      const doc = new Document({
        sections:[
          {
            children:[
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "소 취 하 서",
                    bold: true,
                    size: 30,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Table({
                width: {
                  size: 100,
                  type: WidthType.PERCENTAGE,
                },
                borders: {
                  top: { style: "none" },
                  bottom: { style: "none" },
                  left: { style: "none" },
                  right: { style: "none" },
                  insideHorizontal: { style: "none" },
                  insideVertical: { style: "none" },
                },
                rows:[
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children:[
                      new TableCell({
                        width: {
                          size: 15,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children:[
                          new Paragraph({
                            text: "사    건",
                            alignment: "left",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 85,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children:[
                          new Paragraph({
                            text: `${data.case_number} ${data.category}`,
                            alignment: "left",
                          }),
                        ],
                      }),
                    ]
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children:[
                      new TableCell({
                        width: {
                          size: 15,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children:[
                          new Paragraph({
                            text: "원    고",
                            alignment: "left",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 85,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children:[
                          new Paragraph({
                            text: `${data.plaintiff}`,
                            alignment: "left",
                          }),
                        ],
                      }),
                    ]
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children:[
                      new TableCell({
                        width: {
                          size: 15,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children:[
                          new Paragraph({
                            text: "피    고",
                            alignment: "left",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 85,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children:[
                          new Paragraph({
                            text: `${data.defendant}`,
                            alignment: "left",
                          }),
                        ],
                      }),
                    ]
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: "  위 사건에 관하여 당사자간에 원만히 합의되었으므로 원고는 소전부를 취하 합니다.",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `${data.creation_date}`,
                alignment: "center",
              }),
              new Paragraph({
                text: `위 원고 ${data.plaintiff} (서명 또는 날인)`,
                alignment: "center",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: "위 취하에 동의함",
                alignment: "center",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `위 피고 ${data.defendant} (서명 또는 날인)`,
                alignment: "right",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                children:[
                  new TextRun({
                    text: `${data.courthouse} ${data.court} 귀중`,
                    size: 25,
                    bold: true,
                  }),
                ],
                
              }),
            ],
          }
        ],
      });
      Packer.toBlob(doc).then((bolb) => {
        saveAs(bolb, "소취하서.docx");
      });
    }
  }, [data]);

  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>소취하서</Name>
      <Title>사건번호</Title>
      <InputText type="text" {...register("case_number")} />
      <Title>사건유형</Title>
      <InputText
        type="text"
        {...register("category")}
        placeholder="예) 손해배상(자)"
      />
      <Title>원고</Title>
      <InputText type="text" {...register("plaintiff")} />
      <Title>피고</Title>
      <InputText type="text" {...register("defendant")} />
      <Title>작성일자</Title>
      <InputText type="text" {...register("creation_date")} />
      <Title>제출 법원</Title>
      <InputText type="text" {...register("courthouse")} />
      <Title>재판부</Title>
      <InputText
        type="text"
        {...register("court")}
        placeholder="예) 제5민사단독 / 제3민사부"
      />
      <SubmitButton />
    </DetailWrap>
  );
};

export default Withdraw;