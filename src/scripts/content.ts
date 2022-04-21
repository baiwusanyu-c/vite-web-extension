import { MESSAGE_TYPES } from '~/enums'

chrome.runtime.sendMessage({ type: MESSAGE_TYPES.CONTENT_LOADED });

