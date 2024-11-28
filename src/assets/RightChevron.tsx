export const RightChevron = ({
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
      viewBox="0 0 16 16"
      fill="none"
      onClick={onClick}
      aria-role="button"
      className="cursor-pointer"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.95601 2.28951C5.16429 2.08123 5.50198 2.08123 5.71026 2.28951L11.0436 7.62284C11.2519 7.83112 11.2519 8.16881 11.0436 8.37709L5.71026 13.7104C5.50198 13.9187 5.16429 13.9187 4.95601 13.7104C4.74773 13.5021 4.74773 13.1645 4.95601 12.9562L9.91222 7.99997L4.95601 3.04376C4.74773 2.83548 4.74773 2.49779 4.95601 2.28951Z"
        fill={color}
      />
    </svg>
  )
}
