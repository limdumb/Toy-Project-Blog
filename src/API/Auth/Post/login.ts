import axios from "axios";

interface Params {
  email: string;
  password: string;
}
//추후 추가예정
interface LoginResponseType {
  memberId: number;
  accessToken: string;
  refreshToken: string;
}

export default async function login(params: Params) {
  const request = {
    email: params.email,
    password: params.password,
  };

  await axios.post<LoginResponseType>("url", request).then((res) => {
    if (res.status === 200) {
      localStorage.setItem("memberId", `${res.data.memberId}`);
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
    }
  });
  try {
  } catch (err) {
    if (err === 401) {
      alert("로그인 정보가 잘못 되었습니다!");
    }
  }
}
