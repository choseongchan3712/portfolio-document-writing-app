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
import styled from "styled-components";
import { saveAs } from "file-saver";
import DetailWrap from "../../components/DetailWrap";
import { useForm } from "react-hook-form";
import Name from "../../components/Name";
import SubmitButton from "../../components/SubmitButton";
import { useEffect, useState } from "react";
import Title from "../../components/Title";

const SubmitInput = styled.input`
  all: unset;
  padding: 5px;
  width: 50%;
  border: 1px solid #000;
  margin-bottom: 20px;
`;

const Reminder = (): JSX.Element => {
  const [data, setData] = useState<any>(null);

  const { register, handleSubmit, reset } = useForm<any>();

  const onSubmit = (data: any) => {
    setData({
      bond_name: `${data?.bond_name}`,
      debtor_name: `${data?.debtor_name}`,
      debtor_address: `${data?.debtor_address}`,
      period: `${data?.period}`,
      borrowed_amount: `${data?.borrowed_amount}`,
      interest: `${data?.interest}`,
      etc: `${data?.etc}`,
      deadline: `${data?.deadline}`,
      creditor_name: `${data?.creditor_name}`,
      bank: `${data?.bank}`,
      account_number: `${data?.account_number}`,
      account_tel: `${data?.account_tel}`,
      creation_date: `${data?.creation_date}`,
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
                    text: "독 촉 장",
                    bold: true,
                    size: 30,
                  }),
                ],
              }),
              new Paragraph(""),
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
                        children: [
                          new Paragraph({
                            text: "채 권 명",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        columnSpan: 4,
                        children: [
                          new Paragraph({
                            text: `${data?.bond_name}`,
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
                        rowSpan: 2,
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: "채 무 자",
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
                            text: "성명 또는 명칭",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 60,
                          type: WidthType.PERCENTAGE,
                        },
                        columnSpan: 3,
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
                            text: "주소 또는 소재지",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 60,
                          type: WidthType.PERCENTAGE,
                        },
                        columnSpan: 3,
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: `${data?.debtor_address}`,
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
                            text: "이행기간",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        columnSpan: 4,
                        children: [
                          new Paragraph({
                            text: `${data?.period}`,
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
                        rowSpan: 2,
                        children: [
                          new Paragraph({
                            text: "체납금액",
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
                            text: "원   금",
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
                            text: "이  자",
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
                            text: "연체금기타",
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
                            text: "계",
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
                            text: `${data?.borrowed_amount}`,
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
                            text: `${data?.interest}`,
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
                            text: `${data?.etc}`,
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
                            text: `${
                              parseFloat(data?.borrowed_amount) +
                              parseFloat(data?.interest) +
                              parseFloat(data?.etc)
                            }`,
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
                            text: "독촉기한",
                            alignment: "center",
                          }),
                        ],
                      }),
                      new TableCell({
                        width: {
                          size: 80,
                          type: WidthType.PERCENTAGE,
                        },
                        verticalAlign: "center",
                        columnSpan: 4,
                        children: [
                          new Paragraph({
                            text: `${data?.deadline}`,
                            alignment: "center",
                          }),
                        ],
                      }),
                    ],
                  }),
                  new TableRow({
                    height: {
                      value: 4000,
                      rule: "exact",
                    },
                    children: [
                      new TableCell({
                        width: {
                          size: 100,
                          type: WidthType.PERCENTAGE,
                        },
                        columnSpan: 5,
                        children: [
                          new Paragraph(""),
                          new Paragraph({
                            text: `위의 금액이 체납되었으니 위의 독촉기한까지 ${data?.bank}: ${data?.account_number} 에 납입하시기 바랍니다.`,
                            alignment: "center",
                          }),
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
                          new Paragraph({
                            text: "성명 : ________(인)",
                            alignment: "right",
                          }),
                          new Paragraph(""),
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
                          size: 100,
                          type: WidthType.PERCENTAGE,
                        },
                        columnSpan: 5,
                        verticalAlign: "center",
                        children: [
                          new Paragraph({
                            text: `• 이 독촉장에 의문이 있으시면 ${data?.creditor_name}(전화 : ${data?.account_tel})에 문의하여 주십시오.`,
                            alignment: "center",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          },
        ],
      });
      Packer.toBlob(doc).then((bolb) => {
        saveAs(bolb, "독촉장.docx");
        console.log("문서가 작성 되었습니다.");
      });
    }
  }, [data]);

  return (
    <DetailWrap submitHandler={handleSubmit(onSubmit)}>
      <Name>독촉장</Name>
      <Title>채권명</Title>
      <SubmitInput type="text" {...register("bond_name")} />
      <Title>채무자 이름</Title>
      <SubmitInput type="text" {...register("debtor_name")} />
      <Title>채무자 주소</Title>
      <SubmitInput type="text" {...register("debtor_address")} />
      <Title>이행기간</Title>
      <SubmitInput type="text" {...register("period")} />
      <Title>차용금액</Title>
      <SubmitInput type="number" {...register("borrowed_amount")} />
      <Title>이자</Title>
      <SubmitInput type="number" {...register("interest")} />
      <Title>연체금 기타</Title>
      <SubmitInput type="number" {...register("etc")} />
      <Title>독촉기한</Title>
      <SubmitInput type="text" {...register("deadline")} />
      <Title>채권자 이름</Title>
      <SubmitInput type="text" {...register("creditor_name")} />
      <Title>채권자 은행</Title>
      <SubmitInput type="text" {...register("bank")} />
      <Title>채권자 계좌번호</Title>
      <SubmitInput type="text" {...register("account_number")} />
      <Title>채권자 전화번호</Title>
      <SubmitInput type="text" {...register("account_tel")} />
      <Title>작성일자</Title>
      <SubmitInput type="text" {...register("creation_date")} />
      <SubmitButton />
    </DetailWrap>
  );
};

export default Reminder;
