import { Button } from "@mantine/core";

interface DownloadPdfButtonProps {
    pdfUrl: string;
    fileName: string;
    title: string;
}

const DownloadPdfButton: React.FC<DownloadPdfButtonProps> = ({ pdfUrl, fileName, title }) => {
    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <Button onClick={handleDownload} radius="md">
           {title}
        </Button>
    );
};

export default DownloadPdfButton;