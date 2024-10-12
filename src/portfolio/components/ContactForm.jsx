import React from 'react';
import { Box, Button, Flex, Text, Separator, Heading } from '@radix-ui/themes';
import { EnvelopeClosedIcon, MobileIcon, PaperPlaneIcon } from '@radix-ui/react-icons';
import styles from './ContactForm.module.css';
import contactIllustration from '/public/contact-illustration.svg';
export const ContactForm = () => {
  return (
    <Flex className={styles.flexContainer} direction={{ initial: 'column', lg: 'column' }} align="center" justify={{ initial: 'center', lg: 'between' }}>
      <Box className={styles.headerContainer}>
        <Box className={styles.iconTextContainer}>
          <EnvelopeClosedIcon className={styles.icon}/>

            <Heading Heading as='h2' size={'5'} ml={'2'}  >
              Email me!
            </Heading>
        </Box>

      </Box>
      <Separator size={'4'} color='violet' />
      <Box className={styles.formContainer}>
      <Box className={styles.sidebar}>
          <img src={contactIllustration} alt="Contact Illustration"  />
        </Box>
        <form className={styles.form} onSubmit={(e) => {
          e.preventDefault();
        }}>
          <input type="text" name="name" id="name" placeholder="Name" className={styles.input} />
          <input type="email" name="email" id="email" placeholder="Email" className={styles.input} />
          <textarea name="message" id="message" placeholder="Message" rows="4" className={styles.textarea} />
          {/* <button type="submit" className={styles.button}>
            Send
          </button> */}
          <Button style={{ overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }} type='submit' size="3" variant="outline">
            {/* <Box className={styles.sendBoxContainer}> */}
            <Text className={styles.sendText}>Send</Text>
            <PaperPlaneIcon className={styles.sendAnimation} />


            {/* </Box> */}
            <Box className={styles.sparkleContainer}>
              <svg className={styles.sparkle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
              <svg className={styles.sparkle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
              <svg className={styles.sparkle} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" /></svg>
            </Box>
          </Button>
        </form>
      </Box>
    </Flex>
  );
};
