import {styled} from '@/styled-system/jsx';
import {ark} from '@ark-ui/react';
import {group, icon, input} from './input-group.recipe';

export const InputGroup = styled(ark.div, group);
export const Input = styled(ark.input, input);
export const InputIcon = styled(ark.svg, icon);
