import '@material/web/list/list'
import '@material/web/list/list-item'
import '@material/web/icon/icon'
import '@material/web/button/filled-button'
import '@material/web/textfield/filled-text-field';

import { registerNavigationApi } from './navigation.js'

export default function() { // or export default async function()
  // package initialization code
  registerNavigationApi()
}