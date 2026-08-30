Java's JIT compiler focuses on optimizing "hot" methods that are executed frequently, while less frequently used code paths might remain interpreted. This adaptive approach allows the JVM to invest optimization effort where it matters most.

The LFU (Least Frequently Used) eviction policy is ideal for this scenario because it keeps the most frequently accessed items in the cache. Since 5% of products receive 80% of views in your e-commerce site, LFU will naturally retain these popular products while evicting rarely accessed ones.
