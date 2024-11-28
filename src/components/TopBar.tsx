import {
  FakeProfilePNG,
  NotLoggedInSVG,
  SearchInputPNG,
  SZSLogoSVG,
} from "../assets"

export const TopBar = ({
  isLoggedIn,
  onLogin,
}: {
  isLoggedIn: boolean
  onLogin: () => void
}) => {
  return (
    <div className="h-[84px] bg-white flex items-center justify-between px-[50px]">
      <SZSLogoSVG />
      <div className="flex items-center">
        <img
          src={SearchInputPNG}
          alt="search"
          className="w-[335px] h-[48px] mr-[24px]"
        />
        <div className="w-[1px] h-[42px] bg-[#E8EBED]" />
        {!isLoggedIn ? (
          <NotLoggedInSVG
            className="ml-[24px] cursor-pointer"
            onClick={onLogin}
          />
        ) : (
          <div className="flex items-center w-[48px] h-[48px] rounded overflow-hidden">
            <img src={FakeProfilePNG} alt="logged in" />
          </div>
        )}
      </div>
    </div>
  )
}
