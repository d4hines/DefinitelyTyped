declare let linkerClient: any;
export default linkerClient;
/**
 * Callback that returns a list of channels in the responseMessage
* @callback LinkerChannelsCB
* @param {Object} err Error message, or null if no error
* @param {Array.<string>} channels List of channels
*/
/**
 * Callback that returns a new {@link LinkerState}
* @callback LinkerStateCB
* @param {Object} err Error message, or null if no error
* @param {Array.<string>} channels List of all channels linked to the requested component
* @param {Array.<string>} allChannels List of all available channels
*/
/**
 * A list of enabled channels and a list of all channels
* @callback LinkerState
* @param {Array.<string>} channels List of all channels linked to the requested component
* @param {Array.<string>} allChannels List of all available channels
*/
