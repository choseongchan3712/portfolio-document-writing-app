import {
  Document,
  Packer,
  Paragraph,
  Tab,
  Table,
  TableCell,
  TableRow,
  TextRun,
  WidthType,
} from "docx";
import { saveAs } from "file-saver";
import styled from "styled-components";

const Container = styled.div``;

const Memorandum = (): JSX.Element => {
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
            "상기인은 채권자 에게서 20 년 월 일 금 만원을 차용하고 20 년 월 일까지는 틀림없이 변제할 것을 각서 하오며 만약 20 년 월 일까지 변제하지 않을 때에는 저의 재산 에 대한 (또한 보증인의 재산에 대한) 어떠한 법적 조치를 취하여도 이의 제기를 하지 않을 것 이며 이로 인한 어떠한 피해도 감수할 것을 각서합니다."
          ),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph(""),
          new Paragraph({
            text: "20년 월 일",
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
                text: "________귀하",
                size: 25,
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });

  const clickHandler = () => {
    Packer.toBlob(doc).then((bolb) => {
      saveAs(bolb, "각서(차용금 반환에 대한 각서).docx");
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

export default Memorandum;
