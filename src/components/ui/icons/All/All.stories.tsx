// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react';
import styled from 'styled-components';

import Add from '../Add';
import Arrow from '../Arrow';
import Attendees from '../Attendees';
import Attachment from '../Attachment';
import Camera from '../Camera';
import Caret from '../Caret';
import Caution from '../Caution';
import Chat from '../Chat';
import Check from '../Check';
import CheckRound from '../CheckRound';
import Clear from '../Clear';
import Clock from '../Clock';
import Cog from '../Cog';
import ConnectionProblem from '../ConnectionProblem';
import Dislike from '../Dislike';
import Dock from '../Dock';
import Dots from '../Dots';
import ScreenShare from '../ScreenShare';
import Crown from '../Crown';
import DeskPhone from '../DeskPhone';
import Echo from '../Echo';
import Dialer from '../Dialer';
import Document from '../Document';
import DropToAttach from '../DropToAttach';
import Hamburger from '../Hamburger';
import HandRaise from '../HandRaise';
import Information from '../Information';
import Laptop from '../Laptop';
import LeaveMeeting from '../LeaveMeeting';
import Like from '../Like';
import ListHandRaise from '../ListHandRasie';
import Lock from '../Lock';
import Meeting from '../Meeting';
import Microphone from '../Microphone';
import Pause from '../Pause';
import Pin from '../Pin';
import Phone from '../Phone';
import Play from '../Play';
import Presenter from '../Presenter';
import Record from '../Record';
import Remove from '../Remove';
import Rooms from '../Rooms';
import Search from '../Search';
import Share from '../Share';
import SignalStrength from '../SignalStrength';
import Sound from '../Sound';
import Flex from '../../Flex';
import Eye from '../Eye';
import EmojiPicker from '../EmojiPicker';
import UpAndDownCaret from '../UpAndDownCaret';
import Spinner from '../Spinner';
import ZoomOut from '../ZoomOut';
import ZoomIn from '../ZoomIn';

export default {
  title: 'UI Components/Icons/All',
  component: null,
};

const icons = [
  Add,
  Arrow,
  Attendees,
  Attachment,
  Camera,
  Caret,
  Caution,
  Chat,
  Check,
  CheckRound,
  Clear,
  Clock,
  Cog,
  ConnectionProblem,
  Crown,
  Dislike,
  DropToAttach,
  Dots,
  Dock,
  Document,
  ScreenShare,
  Crown,
  DeskPhone,
  Echo,
  Dialer,
  EmojiPicker,
  Eye,
  Hamburger,
  HandRaise,
  Information,
  Laptop,
  LeaveMeeting,
  Like,
  ListHandRaise,
  Lock,
  Meeting,
  Microphone,
  Pause,
  Pin,
  Phone,
  Play,
  Presenter,
  Record,
  Remove,
  Rooms,
  Search,
  Share,
  SignalStrength,
  Sound,
  Spinner,
  UpAndDownCaret,
  ZoomOut,
  ZoomIn,
];

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem 1.5rem;
  width: 80px;
  padding: 0.5rem;
  border-radius: 2px;
`;

const getIconAndName = (Icon, args, index) => {
  return (
    <IconWrapper key={index}>
      <Icon {...args} />
      <p>{Icon.displayName}</p>
    </IconWrapper>
  );
};

export const _All = (args) => {
  return (
    <Flex container flexDirection="row" alignItems="center" flexWrap="wrap">
      {icons.map((icon, index) => getIconAndName(icon, args, index))}
    </Flex>
  );
};

_All.argTypes = {
  width: { control: 'text' },
};

_All.args = {
  width: '4rem',
};

_All.story = {
  name: 'Arrow',
};
