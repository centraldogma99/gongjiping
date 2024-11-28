export const LeftChevron = ({
  color,
  size,
  onClick,
}: {
  color: string
  size: number
  onClick: () => void
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      onClick={onClick}
      aria-role="button"
      className="cursor-pointer"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M16.5659 3.43427C16.2535 3.12185 15.7469 3.12185 15.4345 3.43427L7.43451 11.4343C7.12209 11.7467 7.12209 12.2532 7.43451 12.5656L15.4345 20.5656C15.7469 20.8781 16.2535 20.8781 16.5659 20.5656C16.8783 20.2532 16.8783 19.7467 16.5659 19.4343L9.13157 12L16.5659 4.56564C16.8783 4.25322 16.8783 3.74669 16.5659 3.43427Z"
        fill={color}
      />
    </svg>
  )
}
