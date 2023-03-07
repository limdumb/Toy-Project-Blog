import { useState } from "react";
import { GoPencil } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CommentSpan } from "./Comment";
import CommentInput from "./CommentInput";

interface ReCommentProps {
  commentId: number;
  memberId: number;
  perentsId: number;
  nickName: string;
  comment: string;
  createdAt: string;
}

const ReComment = ({ recomment }: { recomment: ReCommentProps }) => {
  const [isEditRecomment, setIsEditRecomment] = useState(false);
  const [editRecomment, setEditRecomment] = useState(recomment.comment);
  return (
    <div className="ReComment_Container">
      <CommentSpan usage="write">⌙ {recomment.nickName}: </CommentSpan>
      {isEditRecomment ? (
        <CommentInput
          width="30%"
          height="40px"
          marginLeft="1rem"
          value={editRecomment}
          onChange={(e) => setEditRecomment(e.target.value)}
        />
      ) : (
        <CommentSpan>{recomment.comment}</CommentSpan>
      )}
      <CommentSpan usage="date">{recomment.createdAt}</CommentSpan>
      <div className="Comment_Manage_Container">
        <GoPencil
          className="Pencil_icon"
          onClick={() => setIsEditRecomment(!isEditRecomment)}
        />
        <RiDeleteBin6Line className="Delete_icon" />
      </div>
    </div>
  );
};

export default ReComment;
