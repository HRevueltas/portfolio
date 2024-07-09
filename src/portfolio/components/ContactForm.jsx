import React from 'react';
import { Box, Flex } from '@radix-ui/themes';

export const ContactForm = () => {
    return (
        <Flex direction={{ initial: 'column', lg: 'row' }} align="center" justify={{ initial: 'center', lg: 'between' }} p="4">

            <Box  style={{ width: '100%', height: '200px', backgroundColor: 'blue'  }} mb={'-8'}>

            </Box>

            <Box as="form" width={{ initial: '100%', lg: '50%' }} p="4" backgroundColor="lightgray" borderRadius="8px">
                <Box mb="3">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
                </Box>

                <Box mb="3">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
                </Box>

                <Box mb="3">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="4" style={{ width: '100%', padding: '8px', borderRadius: '4px' }} />
                </Box>

                <Box>
                    <button type="submit" style={{ padding: '10px 20px', borderRadius: '4px', backgroundColor: '#007BFF', color: 'white' }}>
                        Submit
                    </button>
                </Box>
            </Box>
        </Flex>
    );
};
