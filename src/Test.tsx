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

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .button {
    width: 100px;
    height: 50px;
    border-radius: 50px;
    background-color: salmon;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    cursor: pointer;
  }
`;

const Test = (): JSX.Element => {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: "금전차용증서",
                bold: true,
                size: 30,
              }),
            ],
            alignment: "center",
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
                      size: 10,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "채무자",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                    rowSpan: 2,
                  }),
                  new TableCell({
                    width: {
                      size: 10,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "성명",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                  }),
                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                    columnSpan: 2,
                  }),
                  new TableCell({
                    width: {
                      size: 10,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "생년월일",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                  }),
                  new TableCell({
                    width: {
                      size: 40,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                    columnSpan: 3,
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
                      size: 10,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "주소",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                  }),
                  new TableCell({
                    width: {
                      size: 80,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                    columnSpan: 5,
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
                      size: 10,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "채권자",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                    rowSpan: 2,
                  }),
                  new TableCell({
                    width: {
                      size: 10,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "성명",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                  }),
                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                    columnSpan: 2,
                  }),
                  new TableCell({
                    width: {
                      size: 10,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "생년월일",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                  }),
                  new TableCell({
                    width: {
                      size: 40,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                    columnSpan: 3,
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
                      size: 10,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "주소",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                  }),
                  new TableCell({
                    width: {
                      size: 90,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                    verticalAlign: "center",
                    columnSpan: 5,
                  }),
                ],
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
                        text: "차용금액",
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
                    columnSpan: 5,
                    children: [
                      new Paragraph({
                        text: "일금 월정(₩ )",
                        alignment: "left",
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
                        text: "이자",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        text: "",
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
                        text: "상환방법",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        text: "",
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
                        text: "차용일자",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        text: "20 년 월 일",
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
                        text: "상환일자",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 30,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    columnSpan: 2,
                    children: [
                      new Paragraph({
                        text: "20 년 월 일",
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
            alignment: "center",
            children: [
              new TextRun({
                text: "위와 같이 채무자는 채권자로부터 다음과 같은 조건으로 차용한 것을 확인한다.",
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph({
            alignment: "center",
            children: [
              new TextRun({
                text: "다    음",
                bold: true,
                size: 25,
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "1. 이자는 매월 일까지 채권자가 지정하는 아래 은행으로 송금하도록 한다.",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "  ( 은행, 채권자명, 계좌번호)",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "2. 원금은 20 년 월 일까지 전액 변제한다. 단, 상호합의에 따라 연장할 수 있다.",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "3. 담보 및 연대보증인은 없는 것으로 한다.",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "4. 만일 이자를 일 이상 연체한 경우에는 채무자의 전 채무는 기한의 이익을 상실하고 채권자의 청구즉시 전 채무를 현금으로 변제한다.",
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "위와 같이 채무자는 차용사항을 확인하고, 이 금전차용증서를 작성하여 채권자에게 교부합니다.",
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            alignment: "center",
            children: [
              new TextRun({
                text: "20 년 월 일",
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                                            채무자:_________(인)",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                                            연락처:",
              }),
            ],
          }),
        ],
      },
    ],
  });

  const clickHandler = () => {
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "test.docx");
      console.log("문서가 작성 되었습니다.");
    });
  };

  return (
    <Container>
      <div className="button" onClick={clickHandler}>
        만들기
      </div>
    </Container>
  );
};

export default Test;
