import { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <div className="main-bg no-scroll">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="title"
      >
        ReykoDev
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="subtitle"
      >
        Сайт-визитка. Вдохновлено eb(null).
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="contacts"
      >
        {!showContacts ? (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="show-contact-btn"
            onClick={() => setShowContacts(true)}
          >
            Показать контакты
          </motion.button>
        ) : (
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            href="mailto:contact@reykodev.com"
            className="contact-link"
          >
            contact@reykodev.com
          </motion.a>
        )}
      </motion.div>
    </div>
  );
}

export default App;
