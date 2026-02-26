export function FactoryPath({path, fileOrigin}) {
    const PORT = import.meta.env.VITE_API_BASE_URL;
    return {
        path: path,
        fileOrigin: fileOrigin,
        OrganizePath() {
            if (!this.path) {
                return `${PORT + this.fileOrigin}`;
            } else {
                return `${PORT + this.path + this.fileOrigin}`;
            }
        }
    }
}
