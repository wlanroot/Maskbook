import { makeStyles } from '@masknet/theme'
import { Box, Typography } from '@mui/material'
import { TokenIcon } from '@masknet/shared'
import type { ChainId } from '@masknet/web3-shared-evm'
import { useI18N } from '../../locales/index.js'
import { SponsoredFarmIcon } from './icons/SponsoredFarm.js'

const useStyles = makeStyles()((theme) => ({
    tokenDetails: {
        marginLeft: '16px',
        fontWeight: 500,
    },
    farmName: {
        '& svg': {
            marginLeft: 7,
        },
    },
    tokenName: {
        color: theme.palette.text.secondary,
        fontWeight: 400,
    },
    tokenIcon: {
        width: '40px',
        height: '40px',
        backgroundColor: theme.palette.background.default,
        borderRadius: '50%',
    },
}))

export interface TokenProps {
    chainId?: ChainId
    address: string
    name: string
    symbol?: string
    logoURL?: string
}

export interface FarmTokenDetailedProps extends React.PropsWithChildren<{}> {
    token?: TokenProps
    hideFarmTypeIcon?: boolean
}

export function FarmTokenDetailed({ token, hideFarmTypeIcon = false }: FarmTokenDetailedProps) {
    const t = useI18N()
    const { classes } = useStyles()

    return (
        <Box display="flex" alignItems="center">
            {token && (
                <>
                    {token ? <TokenIcon {...token} /> : <div className={classes.tokenIcon} />}
                    <Box display="flex" flexDirection="column" className={classes.tokenDetails}>
                        <Typography display="flex" alignItems="center" className={classes.farmName} fontWeight="500">
                            {token.symbol} {t.referral_farm()} {!hideFarmTypeIcon && <SponsoredFarmIcon />}
                        </Typography>
                        <Typography className={classes.tokenName}>{token.name}</Typography>
                    </Box>
                </>
            )}
        </Box>
    )
}
