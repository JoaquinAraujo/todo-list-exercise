export default function reducer (state, action) {
  switch (action.type) {
    case 'add':
      return {
        tasks: state.tasks.concat(action.payload.task)
      }
    case 'remove':
      return {
        tasks: state.tasks.filter(item => item.id !== action.payload.task.id)
      }
    default:
      throw new Error()
  }
}
