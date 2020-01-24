import { APIError } from 'linode-js-sdk/lib/types';
import { actionCreatorFactory } from 'typescript-fsa';

import { SpacingChoice, ThemeChoice } from 'src/LinodeThemeWrapper';

const actionCreator = actionCreatorFactory(`@@manager/preferences`);

export interface UserPreferences {
  longviewTimeRange?: string;
  gst_banner_dismissed?: boolean;
  linodes_group_by_tag?: boolean;
  domains_group_by_tag?: boolean;
  volumes_group_by_tag?: boolean;
  nodebalancers_group_by_tag?: boolean;
  linodes_view_style?: 'grid' | 'list';
  theme?: ThemeChoice;
  spacing?: SpacingChoice;
  desktop_sidebar_open?: boolean;
}

export const handleGetPreferences = actionCreator.async<
  void,
  UserPreferences,
  APIError[]
>(`get`);

export const handleUpdatePreferences = actionCreator.async<
  UserPreferences,
  UserPreferences,
  APIError[]
>(`update`);
