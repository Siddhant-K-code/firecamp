import { RiBracesLine } from '@react-icons/all-files/ri/RiBracesLine';
import { VscArrowDown } from '@react-icons/all-files/vsc/VscArrowDown';
import { VscFolder } from '@react-icons/all-files/vsc/VscFolder';
import { VscOrganization } from '@react-icons/all-files/vsc/VscOrganization';
import { AiOutlineUserAdd } from '@react-icons/all-files/ai/AiOutlineUserAdd';
import { AiOutlineUserSwitch } from '@react-icons/all-files/ai/AiOutlineUserSwitch';
import { VscMultipleWindows } from '@react-icons/all-files/vsc/VscMultipleWindows';
import { VscWindow } from '@react-icons/all-files/vsc/VscWindow';
import { Button, FcIconGetSquare } from '@firecamp/ui';
import DropdownMenu from './DropdownMenu';

enum EMenuOptions {
  Request = 'request',
  Collection = 'collection',
  Environment = 'environment',
  ImportCollection = 'import-collection',
  Workspace = 'workspace',
  Organization = 'organization',
  InviteMembers = 'invite-members',
  SwitchOrg = 'switch-org',
  SwitchWorkspace = 'switch-workspace',
}
const options = [
  {
    id: 'CreateNewHeader',
    name: 'Create New',
    isLabel: true,
  },
  {
    id: EMenuOptions.Request,
    name: 'Request',
    prefix: () => <FcIconGetSquare size={16} />,
    postfix: () => <span className="text-inputPlaceholder">⌘K</span>,
  },
  {
    id: EMenuOptions.Collection,
    name: 'Collection',
    prefix: () => <VscFolder size={16} />,
  },
  {
    id: EMenuOptions.Environment,
    name: 'Environment',
    prefix: () => <RiBracesLine size={16} />,
  },
  {
    id: EMenuOptions.ImportCollection,
    name: 'Import Collection',
    showSeparator: true,
    prefix: () => <VscArrowDown size={16} />,
  },
  {
    id: 'CreateNewByAdminHeader',
    name: 'Create New (By Admin)',
    isLabel: true,
  },

  {
    id: EMenuOptions.Workspace,
    name: 'Workspace',
    prefix: () => <VscWindow size={16} />,
  },
  {
    id: EMenuOptions.Organization,
    name: 'Organization',
    prefix: () => <VscOrganization size={16} />,
  },
  {
    id: EMenuOptions.InviteMembers,
    name: 'Invite Members',
    showSeparator: true,
    prefix: () => <AiOutlineUserAdd size={16} />,
  },
  {
    id: 'SwitchHeader',
    name: 'SWITCH',
    isLabel: true,
  },
  {
    id: EMenuOptions.SwitchOrg,
    name: 'Switch Organization',
    prefix: () => <AiOutlineUserSwitch size={16} />,
  },
  {
    id: EMenuOptions.SwitchWorkspace,
    name: 'Switch Workspace',
    prefix: () => <VscMultipleWindows size={16} />,
  },
];

export default {
  title: 'Sample/DropdownMenu',
  component: DropdownMenu,
};

const Template = ({ ...args }: any) => {
  return <DropdownMenu {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  options,
  handleRenderer: () => (
    <Button text={'Create'} primary withCaret transparent ghost xs />
  ),
  classNames: {
    dropdown: 'p-0 border border-appBorder bg-popoverBackground !rounded-none',
    label:
      'text-activityBarInactiveForeground !pb-1 !pt-3 !px-5 uppercase text-xs font-medium leading-3 font-sans',
    item: 'text-appForeground !px-5 py-px text-sm hover:!bg-focus1 focus-visible:!bg-focus1 leading-6 cursor-pointer font-sans',
  },
};
