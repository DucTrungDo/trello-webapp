import Chip from '@mui/material/Chip'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import DashboardIcon from '@mui/icons-material/Dashboard'
import VpnLockIcon from '@mui/icons-material/VpnLock'
import AddToDriveIcon from '@mui/icons-material/AddToDrive'
import BoltIcon from '@mui/icons-material/Bolt'
import FilterListIcon from '@mui/icons-material/FilterList'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import { capitalizeFirstLetter } from '~/utils/formatter'

const MENU_STYLES = {
  color: 'white',
  bgcolor: 'transparent',
  border: 'none',
  paddingX: '5px',
  borderRadius: '4px',
  '.MuiSvgIcon-root': {
    color: 'white'
  },
  '&:hover': {
    bgcolor: 'primary.50'
  }
}

function BoardBar({ board }) {
  return (
    <Box
      sx={{
        width: '100%',
        height: (theme) => theme.trello.boardBarHeight,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        paddingX: 2,
        overflowX: 'auto',
        borderTop: `1px solid  ${(theme) => (theme.palette.mode === 'dark' ? '#646f82' : '#297eb0')}`,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#364257' : '#005c91')
        // borderBottom: '1px solid white'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Chip sx={MENU_STYLES} icon={<DashboardIcon />} label={board?.title} clickable />
        <Chip sx={MENU_STYLES} icon={<VpnLockIcon />} label={capitalizeFirstLetter(board?.type)} clickable />
        <Chip sx={MENU_STYLES} icon={<AddToDriveIcon />} label='Add To Google Drive' clickable />
        <Chip sx={MENU_STYLES} icon={<BoltIcon />} label='Automation' clickable />
        <Chip sx={MENU_STYLES} icon={<FilterListIcon />} label='Filters' clickable />
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        <Button
          variant='outlined'
          startIcon={<PersonAddIcon />}
          sx={{
            color: 'white',
            borderColor: 'white',
            '&:hover': { borderColor: 'white' }
          }}
        >
          Invite
        </Button>

        <AvatarGroup
          max={7}
          sx={{
            // gap: '10px',
            '& .MuiAvatar-root': {
              width: 34,
              height: 34,
              fontSize: 16,
              border: 'none',
              color: 'white',
              cursor: 'pointer',
              '&:first-of-type': { bgcolor: '#a4b0be' }
            }
          }}
        >
          <Tooltip title='ductrungdo'>
            <Avatar alt='ductrungdo' src='/src/assets/avatar_1.png' />
          </Tooltip>
          <Tooltip title='ductrungdo'>
            <Avatar
              alt='ductrungdo'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-012.jpg'
            />
          </Tooltip>
          <Tooltip title='ductrungdo'>
            <Avatar
              alt='ductrungdo'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-009.jpg'
            />
          </Tooltip>
          <Tooltip title='ductrungdo'>
            <Avatar
              alt='ductrungdo'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-006.jpg'
            />
          </Tooltip>
          <Tooltip title='ductrungdo'>
            <Avatar
              alt='ductrungdo'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-017.jpg'
            />
          </Tooltip>
          <Tooltip title='ductrungdo'>
            <Avatar
              alt='ductrungdo'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-016.jpg'
            />
          </Tooltip>
          <Tooltip title='ductrungdo'>
            <Avatar
              alt='ductrungdo'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-014.jpg'
            />
          </Tooltip>
          <Tooltip title='ductrungdo'>
            <Avatar
              alt='ductrungdo'
              src='https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/avatar-den-ngau-010.jpg'
            />
          </Tooltip>
        </AvatarGroup>
      </Box>
    </Box>
  )
}

export default BoardBar
