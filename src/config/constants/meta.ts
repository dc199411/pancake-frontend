import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'MULTIVERSE',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by PancakeSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('MULTIVERSE')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('MULTIVERSE')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('MULTIVERSE')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('MULTIVERSE')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('MULTIVERSE')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('MULTIVERSE')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('MULTIVERSE')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('MULTIVERSE')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('MULTIVERSE')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('MULTIVERSE')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('MULTIVERSE')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('MULTIVERSE')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('MULTIVERSE')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('MULTIVERSE')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('MULTIVERSE')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('MULTIVERSE')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('MULTIVERSE')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('MULTIVERSE')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('MULTIVERSE Info & Analytics')}`,
        description: 'View statistics for MULTIVERSE exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('MULTIVERSE Info & Analytics')}`,
        description: 'View statistics for MULTIVERSE exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('MULTIVERSE Info & Analytics')}`,
        description: 'View statistics for MULTIVERSE exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('PancakeSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('PancakeSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('PancakeSwap')}`,
      }
    default:
      return null
  }
}
