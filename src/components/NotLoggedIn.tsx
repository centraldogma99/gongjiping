import { GoogleLogoPNG, NeedLoginPNG } from "../assets"
import { googleLogin } from "../utils/google"

export const NotLoggedIn = ({
  onLogin,
}: {
  onLogin: (isLoggedIn: boolean) => void
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full mt-[260px]">
      <img
        src={NeedLoginPNG}
        alt="need login"
        className="w-[201px] h-[119px] mb-[27px]"
      />
      <button
        className="rounded-2xl border border-[#DADEE3] bg-white flex items-center justify-center gap-[4px] p-[16px] w-[253px]"
        onClick={() => {
          googleLogin()
          onLogin(true)
        }}
      >
        <img
          src={GoogleLogoPNG}
          alt="google logo"
          className="w-[20px] h-[20px]"
        />
        <span className="text-[#606A76] font-bold text-base leading-[150%]">
          구글 계정으로 로그인
        </span>
      </button>
    </div>
  )
}
