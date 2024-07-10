import React from 'react';
import { Box, Flex, Text } from '@radix-ui/themes';
import { MobileIcon } from '@radix-ui/react-icons';
import styles from './ContactForm.module.css';

export const ContactForm = () => {
  return (
    <Flex className={styles.flexContainer} direction={{ initial: 'column', lg: 'column' }} align="center" justify={{ initial: 'center', lg: 'between' }}>
      <Box className={styles.headerContainer}>
        <Box className={styles.iconTextContainer}>
          <MobileIcon className={styles.icon} />
          <Text className={styles.iconText}>
            Get in touch
          </Text>
        </Box>
        <Text className={styles.headerText}>
          CONTACT
        </Text>
      </Box>
      <hr className={styles.separator} />
      <Box className={styles.formContainer}>
        <Box className={styles.sidebar}>
          caja1
        </Box>
        <form className={styles.form}>
          <input type="text" name="name" id="name" placeholder="Name" className={styles.input} />
          <input type="email" name="email" id="email" placeholder="Email" className={styles.input} />
          <textarea name="message" id="message" placeholder="Message" rows="4" className={styles.textarea} />
          <button type="submit" className={styles.button}>
            Send
          </button>
        </form>
      </Box>
    </Flex>
  );
};
