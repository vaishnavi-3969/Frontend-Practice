public class StringCache {
    private final int capacity = 100;
    private final Map<String, CacheEntry> cache = new HashMap<>();
    
    public String get(String key) {
        // Get the entry for the specified key
        CacheEntry entry = cache.get(key);
        if (entry == null) return null;
        // Update its access time
        entry.updateAccessTime();
        return entry.value;
    }
    
    public void put(String key, String value) {
        cache.put(key, new CacheEntry(value));
        if (cache.size() > capacity) {
            // If capacity exceeded, remove least recently used
            removeLeastRecentlyUsed();
        }
    }

    void removeLeastRecentlyUsed() {
        String lruKey = null;
        long oldest = Long.MAX_VALUE;
        for (Map.Entry<String, CacheEntry> e : cache.entrySet()) {
            if (e.getValue().lastAccessed < oldest) {
                oldest = e.getValue().lastAccessed;
                lruKey = e.getKey();
            }
        }
        if (lruKey != null) { cache.remove(lruKey); }
    }

    public static void main(String[] args) {}
}