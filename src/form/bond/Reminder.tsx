import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun, WidthType } from "docx";
import styled from "styled-components";
import { saveAs } from "file-saver";

const Container = styled.div``;

const Reminder = ():JSX.Element =>{

  const doc = new Document({
    sections: [
      {
        children:[
          new Paragraph({
            alignment:"center",
            children:[
              new TextRun({
                text:"독 촉 장",
                bold: true,
                size: 30,
              }),
            ],
          }),
          new Paragraph(""),
          new Table({
            width:{
              size: 100,
              type: WidthType.PERCENTAGE,
            },
            rows:[
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
                    verticalAlign:"center",
                    children:[
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
                    verticalAlign:"center",
                    columnSpan:4,
                    children:[
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                height:{
                  value: 700,
                  rule: "exact",
                },
                children:[
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    rowSpan: 2,
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text:"채 무 자",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text:"성명 또는 명칭",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 60,
                      type: WidthType.PERCENTAGE,
                    },
                    columnSpan: 3,
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text:"",
                        alignment: "center",
                      }),
                    ],
                  }),
                ],
              }),
              new TableRow({
                height:{
                  value: 700,
                  rule: "exact",
                },
                children:[
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text:"주소 또는 소재지",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 60,
                      type: WidthType.PERCENTAGE,
                    },
                    columnSpan: 3,
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text:"",
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
                    verticalAlign:"center",
                    children:[
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
                    verticalAlign:"center",
                    columnSpan:4,
                    children:[
                      new Paragraph({
                        text: "20 년 월 일 ~ 20 년 월 일",
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
                children:[
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    rowSpan: 2,
                    children:[
                      new Paragraph({
                        text: "체납금액",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text: "원   금",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text: "이  자",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text: "연체금기타",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
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
                children:[
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
                      new Paragraph({
                        text: "",
                        alignment: "center",
                      }),
                    ],
                  }),
                  new TableCell({
                    width:{
                      size: 20,
                      type: WidthType.PERCENTAGE,
                    },
                    verticalAlign: "center",
                    children:[
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
                    verticalAlign:"center",
                    children:[
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
                    verticalAlign:"center",
                    columnSpan:4,
                    children:[
                      new Paragraph({
                        text: "20 년 월 일 ~ 20 년 월 일",
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
                        text: "위의 금액이 체납되었으니 위의 독촉기한까지 OOO에 납입하시기 바랍니다.",
                        alignment: "center",
                      }),
                      new Paragraph(""),
                      new Paragraph(""),
                      new Paragraph(""),
                      new Paragraph({
                        text: "20 년 월 일",
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
                height:{
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
                    verticalAlign:"center",
                    children:[
                      new Paragraph({
                        text: "• 이 독촉장에 의문이 있으시면 OOO(전화 : 123-4567)에 문의하여 주십시오.",
                        alignment: "center",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }
    ],
  });

  const clickHandler = () => {
    Packer.toBlob(doc).then((bolb) => {
      saveAs(bolb, "독촉장.docx");
      console.log("문서가 작성 되었습니다.");
    });
  };

  return <Container>
    <button className="submit" onClick={clickHandler}>
        받아오기
      </button>
  </Container>;
};

export default Reminder;