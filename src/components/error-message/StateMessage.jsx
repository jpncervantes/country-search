const StateMessage = ({ type, message }) => {
  let color = 'text-gray-500'
  if (type === 'error') color = 'text-red-500'
  if (type === 'info') color = 'text-blue-500'

  return <div className={`text-center ${color} text-sm py-10`}>{message}</div>
}

export default StateMessage
