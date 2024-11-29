import { GoogleLogoPNG, NeedLoginPNG } from "../assets"

export const NotLoggedIn = ({
  onLogin,
  className,
}: {
  onLogin: () => void
  className?: string
}) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <img
        src={NeedLoginPNG}
        alt="need login"
        className="w-[201px] h-[119px] mb-[27px]"
      />
      <button
        className="rounded-2xl border border-[#DADEE3] bg-white flex items-center justify-center gap-[8px] p-[16px] w-[253px]"
        onClick={onLogin}
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
