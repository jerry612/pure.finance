const Button = function ({
  children,
  onClick,
  disabled,
  className = '',
  width = 'w-63',
  ...props
}) {
  const handleClick = () => (disabled || !onClick ? null : onClick())
  return (
    <button
      {...props}
      className={`${width} bg-black rounded-3xl py-3 text-white text-center font-bold text-sm focus:outline-none ${
        disabled ? 'bg-gray-200 cursor-not-allowed' : 'hover:bg-gray-800'
      } ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default Button
