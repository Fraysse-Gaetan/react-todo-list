type TodoProps = {
  content: string;
};

function Todo({ content }: TodoProps) {
  return (
    <div className="message">
      <div className="message__content">{content}</div>
    </div>
  );
}

export default Todo;
