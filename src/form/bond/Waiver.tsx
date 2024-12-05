import { Document, Packer, Paragraph, TextRun } from "docx";
import { saveAs } from "file-saver";
import styled from "styled-components";

const Container = styled.div``;

const Waiver = (): JSX.Element => {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            alignment: "center",
            children: [
              new TextRun({
                text: "포기각서",
                bold: true,
                size: 30,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "■ 채무자 인적사항",
                bold: true,
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "1. 성    명 :",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "2. 주민등록번호 :",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "3. 주    소 :",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "4. 전 화 번 호 :",
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: "■ 금    액",
                bold: true,
              }),
              new TextRun({
                text: " : 일금 원정 (₩)",
              }),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "■ 지급기일",
                bold: true,
              }),
              new TextRun({
                text: " : 20 년 월 일",
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: "본인()은 채권자()로부터 금 원을 차용한 것이 틀림없습니다.",
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: "차용한 위 금액과 관련하여 변제하지 못하였을 시에 아래의 를 임의처분하여도 이의를 제기하지 않겠습니다.",
              }),
            ],
          }),
          new Paragraph(""),
          new Paragraph({
            children: [
              new TextRun({
                text: "■ 담보물 : ",
                bold: true,
              }),
              new TextRun({
                text: "",
              }),
            ],
          }),
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
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        채무자 성명 : __________(인)",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        주민등록번호 :",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        전화번호 :",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        주소 :",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        연대보증인 성명 : __________(인)",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        주민등록번호 :",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        전화번호 :",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        주소 :",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        연대보증인 성명 : __________(인)",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        주민등록번호 :",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        전화번호 :",
              }),
            ],
          }),
          new Paragraph({
            alignment: "left",
            children: [
              new TextRun({
                text: "                                                                                                                        주소 :",
              }),
            ],
          }),
        ],
      },
    ],
  });

  const clickHandler = () => {
    Packer.toBlob(doc).then((bolb) => {
      saveAs(bolb, "포기각서(채무변제 불이행시 담보물 임의 처분에 관한).docx");
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

export default Waiver;
