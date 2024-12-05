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

const Container = styled.div``;

const BondDebtInquiry = (): JSX.Element => {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            alignment: "center",
            children: [
              new TextRun({
                text: "채권 채무 조회",
                bold: true,
                size: 30,
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph(
            "귀하의 하시는 일이 번창하심을 축원하오며, 항상 각별하신 애호와 협조에 감사합니다. 바쁘신 줄 아오나 당사의 회계감사에 필요하여 20 년 월 일 현재, 귀사에 대한 당사의 채권, 채무 잔액과 내용을 확인하고자 하오니 귀사의 장부와 대조, 확인하시고 그 상이 유무를 확인하여 주시기 바랍니다."
          ),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            alignment: "center",
            text: "20 년 월 일",
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Table({
            borders: {
              top: { style: "none", size: 0, color: "000000" },
              left: { style: "none", size: 0, color: "000000" },
              right: { style: "none", size: 0, color: "000000" },
              bottom: { style: "none", size: 0, color: "000000" },
              insideHorizontal: { style: "none", size: 0, color: "000000" },
              insideVertical: { style: "none", size: 0, color: "000000" },
            },
            alignment: "right",
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("주식회사")],
                  }),
                  new TableCell({
                    children: [new Paragraph("")],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph("대표이사")],
                  }),
                  new TableCell({
                    children: [new Paragraph("_________(인)")],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: "귀하",
                bold: true,
                size: 25,
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph("1. 당사가 받을 금액"),
          new Table({
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "계정과목",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "적    요",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "금    액",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "비    고",
                        alignment: "center",
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
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
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
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
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
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
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph("2. 당사가 지급할 금액"),
          new Table({
            width: {
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "계정과목",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "적    요",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "금    액",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "비    고",
                        alignment: "center",
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
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
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
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
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
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
                children: [
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width: {
                      size: 25,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children: [
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
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
            borders: {
              top: { style: "none", size: 0, color: "000000" },
              left: { style: "none", size: 0, color: "000000" },
              right: { style: "none", size: 0, color: "000000" },
              bottom: { style: "dotted", size: 1, color: "000000" },
              insideHorizontal: { style: "none", size: 0, color: "000000" },
              insideVertical: { style: "none", size: 0, color: "000000" },
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
                      size: 100,
                      type: WidthType.PERCENTAGE,
                    },
                    children: [new Paragraph("")],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph({
            alignment: "center",
            children: [
              new TextRun({
                text: "확 인 란",
                bold: true,
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph(
            "1. 위 조회서에 기재된 금액과 내용은 당사 장부와 일치하고 있으므로 이에 확인합니다."
          ),
          new Paragraph("2. 아래와 같이 상이점이 있음을 알려드립니다."),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            alignment: "center",
            text: "20 년 월 일",
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Table({
            borders: {
              top: { style: "none", size: 0, color: "000000" },
              left: { style: "none", size: 0, color: "000000" },
              right: { style: "none", size: 0, color: "000000" },
              bottom: { style: "none", size: 0, color: "000000" },
              insideHorizontal: { style: "none", size: 0, color: "000000" },
              insideVertical: { style: "none", size: 0, color: "000000" },
            },
            alignment: "right",
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({
                      alignment:"right",
                      text: "대표자 성    명 : ",
                    }),],
                  }),
                  new TableCell({
                    children: [new Paragraph("________(인)")],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({
                      alignment:"right",
                      text: "주    소 : ",
                    }),],
                  }),
                  new TableCell({
                    children: [new Paragraph("")],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({
                      alignment:"right",
                      text: "회    사 : ",
                    }),],
                  }),
                  new TableCell({
                    children: [new Paragraph("")],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({
                      alignment:"right",
                      text: "연 락 처 : ",
                    }),],
                  }),
                  new TableCell({
                    children: [new Paragraph("")],
                  }),
                ],
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: "주식회사 귀하",
                bold: true,
                size: 25,
              }),
            ],
          }),
        ],
      },
    ],
  });

  const clickHandler = () => {
    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "채권_채무조회서.docx");
      console.log("문서가 작성 되었습니다.");
    });
  };

  return (
    <Container>
      <button className="submit" onClick={clickHandler}>
        받아오기
      </button>
    </Container>
  );
};

export default BondDebtInquiry;
