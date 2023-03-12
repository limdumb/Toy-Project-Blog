import { BlogDetailProps } from "../../../Pages/BlogDetail";

export default function getBlogDetailData(): Promise<BlogDetailProps> {
  return new Promise((resolve, reject) => {
    try {
      let result: BlogDetailProps = {
        blogTitle: "제목입니다",
        createdAt: "2023.03.06",
        modifiedAt: "2023.03.06",
        blogContents: "<h2>안녕하세요?</h2>",
        commentList: [
          {
            commentId: 1,
            memberId: 1,
            nickname: "minse95",
            profileImageUrl: "",
            commentContent: "댓글1",
            createdAt: "2022.03.06",
            modifiedAt: "2022.03.06",
            status: "ALIVE",
            parentId: null,
            children: [
              {
                commentId: 2,
                memberId: 3,
                nickname: "minse97",
                profileImageUrl: "",
                commentContent: "대댓글1-1",
                createdAt: "2022.03.06",
                modifiedAt: "2022.03.06",
                parentId: 1,
                status: "ALIVE",
              },
              {
                commentId: 3,
                memberId: 3,
                nickname: "minse97",
                profileImageUrl: "",
                commentContent: "대댓글1-2",
                createdAt: "2022.03.06",
                modifiedAt: "2022.03.06",
                parentId: 1,
                status: "DEAD",
              },
              {
                commentId: 7,
                memberId: 3,
                nickname: "minse97",
                profileImageUrl: "",
                commentContent: "대댓글1-3",
                createdAt: "2022.03.06",
                modifiedAt: "2022.03.06",
                parentId: 1,
                status: "ALIVE",
              },
            ],
          },
          {
            commentId: 4,
            memberId: 2,
            nickname: "minse96",
            profileImageUrl: "",
            commentContent: "댓글2",
            createdAt: "2022.03.06",
            modifiedAt: "2022.03.06",
            parentId: null,
            status: "ALIVE",
            children: [
              {
                commentId: 5,
                memberId: 3,
                nickname: "minse97",
                profileImageUrl: "",
                commentContent: "대댓글2-1",
                createdAt: "2022.03.06",
                modifiedAt: "2022.03.06",
                parentId: 4,
                status: "ALIVE",
              },
              {
                commentId: 6,
                memberId: 3,
                nickname: "minse97",
                profileImageUrl: "",
                commentContent: "대댓글2-2",
                createdAt: "2022.03.06",
                modifiedAt: "2022.03.06",
                parentId: 4,
                status: "ALIVE",
              },
            ],
          },
        ],
      };
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}
