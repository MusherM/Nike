const Button = ({
  label,
  iconUrl,
  backgroundColor,
  borderColor,
  textColor,
  fullWidth
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none  rounded-full ${
        backgroundColor ? backgroundColor : 'bg-coral-red'
      } ${borderColor ? borderColor : 'border-coral-red'} ${
        textColor ? textColor : 'text-white'
      } ${fullWidth ? 'w-full' : ''}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow right icom"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  )
}

export default Button
