import { Document, Paragraph, TextRun } from "docx";
import styled from "styled-components";

const Container = styled.div``;

const Waiver =():JSX.Element =>{
  const doc = new Document({
    sections:[
      {
        children: [
          new Paragraph({
            alignment: "center",
            children:[
              new TextRun({
                text: "포기각서",
                bold: true,
                size: 30,
              }),
            ],
          }),
          new Paragraph({
            children:[
              new TextRun({
                text: "■ 채무자 인적사항",
                bold: true,
              }),
            ],
          }),
        ],
      },
    ],
  });
  return <Container></Container>;
};

export default Waiver;