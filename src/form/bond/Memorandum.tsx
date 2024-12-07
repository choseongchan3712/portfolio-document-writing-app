import {
  Document,
  Packer,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import styled from "styled-components";
import DetailWrap from "../../components/DetailWrap";
import { useForm } from "react-hook-form";
import Name from "../../components/Name";
import Title from "../../components/Title";
import { useEffect, useState } from "react";
import SubmitButton from "../../components/SubmitButton";

const SubmitInput = styled.input`
  all: unset;
  padding: 5px;
  width: 50%;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

const Memorandum = (): JSX.Element => {
  const [data, setData] = useState<any>(null);

  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit = (data: any) => {
    setData({
      debtor_name: `${data.debtor_name}`,
      debtor_id: `${data.debtor_id}`,
      debtor_number: `${data.debtor_number}`,
      debtor_address: `${data.debtor_address}`,
      borrowing_date: `${data.borrowing_date}`,
      borrowed_amount: `${data.borrowed_amount}`,
      repayment_date: `${data.repayment_date}`,
      pawn: `${data.pawn}`,
      creation_date: `${data.creation_date}`,
      creditor_name: `${data.creditor_name}`,
    });
    reset();
  };

  useEffect(() => {
    if (data) {
      const doc = new Document({
        sections: [
          {
            children: [
              new Paragraph({
                alignment: "center",
                children: [
                  new TextRun({
                    text: "각    서",
                    bold: true,
                    size: 30,
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "■ 각서인 인적사항",
                    bold: true,
                  }),
                ],
              }),
              new Table({
                width: {
                  size: 100,
                  type: WidthType.PERCENTAGE,
                },
                rows: [
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        rowSpan: 4,
                        children: [
                          new Paragraph({
                            text: "각서인",
                            alignment: "center",
                          }),
                          new Paragraph({
                            text: "인적사항",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "성    명",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 60,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: `${data?.debtor_name}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "주민등록번호",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 60,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: `${data.debtor_id}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "전화번호",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 60,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: `${data.debtor_number}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 700,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 20,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "주    소",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 60,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: `${data.debtor_address}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: "■ 제  목",
                    bold: true,
                  }),
                  new TextRun({
                    text: " : 차용금 반환에 대한 각서",
                  }),
                ],
              }),
              new Paragraph(""),
              new Paragraph(
                `상기인은 채권자 에게서 ${data?.borrowing_date} 금 ${data?.borrowed_amount}만원을 차용하고 ${data?.repayment_date}까지는 틀림없이 변제할 것을 각서 하오며 만약 ${data?.repayment_date}까지 변제하지 않을 때에는 저의 재산 ${data?.pawn}에 대한 (또한 보증인의 재산에 대한) 어떠한 법적 조치를 취하여도 이의 제기를 하지 않을 것 이며 이로 인한 어떠한 피해도 감수할 것을 각서합니다.`
              ),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: `${data?.creation_date}`,
                alignment: "center",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                text: "위 각서인 : ________(인)",
                alignment: "right",
              }),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph(""),
              new Paragraph({
                children: [
                  new TextRun({
                    text: `${data?.creditor_name} 귀하`,
                    size: 25,
                    bold: true,
                  }),
                ],
              }),
            ],
          },
        ],
      });
      Packer.toBlob(doc).then((bolb) => {
        saveAs(bolb, "각서(차용금 반환에 대한 각서).docx");
      });
    }
  }, [data]);

  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>각서</Name>
      <Title>채무자 이름</Title>
      <SubmitInput type="text" {...register("debtor_name")} />
      <Title>채무자 주민등록번호</Title>
      <SubmitInput type="text" {...register("debtor_id")} />
      <Title>채무자 전화번호</Title>
      <SubmitInput type="text" {...register("debtor_number")} />
      <Title>채무자 주소</Title>
      <SubmitInput type="text" {...register("debtor_address")} />
      <Title>채권자 이름</Title>
      <SubmitInput type="text" {...register("creditor_name")} />
      <Title>차용일자</Title>
      <SubmitInput type="text" {...register("borrowing_date")} />
      <Title>차용금액</Title>
      <SubmitInput type="number" {...register("borrowed_amount")} />
      <Title>상환일자</Title>
      <SubmitInput type="text" {...register("repayment_date")} />
      <Title>담보재산</Title>
      <SubmitInput type="text" {...register("pawn")} />
      <Title>작성일자</Title>
      <SubmitInput type="text" {...register("creation_date")} />
      <SubmitButton />
    </DetailWrap>
  );
};

export default Memorandum;
