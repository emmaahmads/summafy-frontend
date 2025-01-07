<template>
    <div>
        <h2>Upload Documents</h2>
        <form @submit.prevent="uploadFiles">
            <input type="file" multiple @change="handleFileUpload" />
            <button type="submit">Upload</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            files: []
        };
    },
    methods: {
        handleFileUpload(event) {
            this.files = event.target.files;
        },
        async uploadFiles() {
            const formData = new FormData();
            for (let i = 0; i < this.files.length; i++) {
                formData.append('files', this.files[i]);
            }

            try {
                const response = await fetch('YOUR_BACKEND_URL', {
                    method: 'POST',
                    body: formData
                });
                if (response.ok) {
                    console.log('Files uploaded successfully');
                } else {
                    console.error('Failed to upload files');
                }
            } catch (error) {
                console.error('Error uploading files:', error);
            }
        }
    }
};
</script>

<style scoped>
/* Add your styles here */
</style>