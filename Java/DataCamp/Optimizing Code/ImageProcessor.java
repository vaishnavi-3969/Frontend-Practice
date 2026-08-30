public class ImageProcessor {
    public static void main(String[] args) {
        List<Image> images = generateImages(500);
        List<Image> result = images
            // Use a parallel stream for multi-thread processing
            .parallelStream()
            // Apply filters to each image using `map()`
            .map(image -> applyFilters(image)) 
            // Collect images to a single list
            .collect(Collectors.toList()); 
    }

    static Image applyFilters(Image image) {
        image = blur(image);
        image = sharpen(image);
        return image;
    }

    static Image blur(Image image) {
        process(); return new Image(image.id, image.width, image.height);
    }

    static Image sharpen(Image image) {
        process(); return new Image(image.id, image.width, image.height);
    }

    static void process() {
        for (int i = 0; i < 100000; i++) {
       		double result = Math.sin(i) * Math.cos(i);
        }
    }

    static List<Image> generateImages(int count) {
        List<Image> list = new ArrayList<>();
        for (int i = 0; i < count; i++) {
            list.add(new Image(i, 1920, 1080));
        }
        return list;
    }
}