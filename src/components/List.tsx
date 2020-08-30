import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Post from "./Post";
import Tag from "./Tag";

type postProps = {
  name: string;
  content: string;
  tagList: string[];
};

const postList: postProps[] = [
  {
    name: "익명1",
    content: "인공지능 너무 어려워요 ㅠ",
    tagList: ["파이썬", "인공지능"],
  },
  {
    name: "익명2",
    content: "어셈 어캐 해요",
    tagList: ["어셈블리"],
  },
  {
    name: "익명3",
    content: "자료 구조 과제 다 하신분 질문요",
    tagList: ["자료구조"],
  },
  {
    name: "익명4",
    content: "인공지능 정확도 몇 프로 나오셨나요",
    tagList: ["인공지능", "파이썬"],
  },
  {
    name: "익명5",
    content: "송화윤 교수님 연구실 지원해보신분, 거기서 어떤 일 하나요???",
    tagList: ["송화윤", "연구실"],
  },
];

export default function List() {
  const [tagFilter, setTagFilter] = useState([]);
  // csv -> json or array로 변환한 파일을 저장할 state
  const [tagList, setTagList] = useState<string[]>([]);

  useEffect(() => {
    let newTagList = new Set([]);
    postList.forEach((post) => {
      post.tagList.forEach((tag) => {
        newTagList.add(tag);
      });
    });
    setTagList(Array.from(newTagList));
  }, []);

  // 작성글에 검색 태그가 포함되어 있는지 확인
  const isPostShow = (post: postProps, tagFilter: string[]) => {
    for (let tag of post.tagList) {
      if (tagFilter.length === 0 || tagFilter.includes(tag)) {
        return true;
      }
    }
    return false;
  };

  return (
    <Wrapper>
      <Title>질문 게시판</Title>
      <Content>
        <PostList>
          {postList.map((post, index) => {
            if (!isPostShow(post, tagFilter)) return <div></div>;

            return <Post {...post} tagFilter={tagFilter} setTagFilter={setTagFilter} key={index} />;
          })}
        </PostList>
        <TagList>
          <SelectedTagListWrapper>
            {tagFilter.map((tag) => {
              return <Tag tag={tag} tagFilter={tagFilter} setTagFilter={setTagFilter} />;
            })}
          </SelectedTagListWrapper>
          <NotSelectedTagListWrapper>
            {tagList.map((tag) => {
              return <Tag tag={tag} tagFilter={tagFilter} setTagFilter={setTagFilter} />;
            })}
          </NotSelectedTagListWrapper>
        </TagList>
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

const Content = styled.div`
  display: flex;
`;

const PostList = styled.div`
  width: 60%;
  border: 2px black solid;
  padding: 0 10px 10px 10px;
`;

const TagList = styled.div`
  border: 2px black solid;
  width: 30%;
  margin-left: 10px;
`;

const SelectedTagListWrapper = styled.div`
  padding: 15px;
  border-bottom: 2px black solid;
`;

const NotSelectedTagListWrapper = styled.div`
  padding: 15px;
`;
