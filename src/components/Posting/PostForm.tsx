import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function PostForm() {
  const [tagFilter, setTagFilter] = useState([]);
  // csv -> json or array로 변환한 파일을 저장할 state
  const [tagList, setTagList] = useState<string[]>([]);

  return (
    <Wrapper>
      <Title>글 작성하기</Title>
      <PostButton href="/">작성완료</PostButton>
      <Content>
        <PostWrapper>
          <ContentTop>
            <PostTitle placeholder="글 제목" />
            <PostWritter placeholder="작성자 이름" />
          </ContentTop>
          <ContentBottom>
            <PostContent placeholder="글 내용을 입력해주세요. 글은 삭제할 수 없으니, 신중하게 작성해주세요."></PostContent>
            <div>태그 선택란</div>
          </ContentBottom>
        </PostWrapper>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding-top: 5%;
  padding-left: 30%;
  padding-right: 30%;
`;

const Title = styled.div`
  text-align: center;
  font-size: 50px;
  margin: 30px;
  padding-right: 90px;
`;

const Content = styled.div``;

const PostWrapper = styled.div`
  width: 100%;
  border: 2px black solid;
  padding: 0 10px 10px 10px;
`;

const ContentTop = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;
const ContentBottom = styled.div`
  padding: 10px;
`;

const PostTitle = styled.textarea`
  font-size: 15px;
  width: 60%;
  border: 2px black solid;
  resize: none;
`;
const PostWritter = styled.textarea`
  border: 2px black solid;
  font-size: 15px;
  resize: none;
`;

const PostContent = styled.textarea`
  border: 2px black solid;
  font-size: 15px;
  resize: none;
  width: 100%;
  height: 10rem;
`;
const PostButton = styled.a`
  border: none;
  border-radius: 20px;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
