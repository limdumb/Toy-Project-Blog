import { tokenInstance } from "../../Instance/Instance";

export default function patchComment(
  commentId: number,
  comment: string,
  accessToken: string | null
) {
  tokenInstance
    .patch(`/comments/${commentId}`, { commentContent: comment })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}
