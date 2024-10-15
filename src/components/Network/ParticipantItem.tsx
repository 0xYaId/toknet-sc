// src/components/ParticipantItem.tsx

import React from 'react';
import {
  Box,
  Text,
  IconButton,
  Flex,
  Tooltip,
  Badge,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { Participant } from '../../types/Participant';

interface ParticipantItemProps {
  participant: Participant;
}

const ParticipantItem: React.FC<ParticipantItemProps> = ({ participant }) => {


  return (
    <Box
      p={4}
      borderWidth="1px"
      borderRadius="lg"
      boxShadow="lg"
      overflow="hidden"
      bg="white"
      _hover={{
        boxShadow: 'xl',
        transform: 'scale(1.02)',
        transition: 'all 0.2s',
      }}
      position="relative"
    >
      xxxxxxxxxxxxxxxxxxx
    </Box>
  );
};

export default ParticipantItem;
