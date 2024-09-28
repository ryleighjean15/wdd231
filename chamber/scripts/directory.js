

window.addEventListener('DOMContentLoaded', (event) => {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = document.lastModified;
    }
});


<script>
    document.getElementById('lastModified').textContent = document.lastModified;
</script>
