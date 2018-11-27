
const apiUrl = endpoint => `/api${endpoint}`;

const attachmentUrl = (folder, file) => apiUrl(`/attachments/${folder}/download/${file}`);

export {
	attachmentUrl,
}
