import { Form } from '../Form';
import { TodoList } from '../TodoList';
import { motion } from 'framer-motion';

function App() {
  return (
    <motion.div
      className="flex  flex-col items-center"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <TodoList />
      <Form />
    </motion.div>
  );
}

export default App;
