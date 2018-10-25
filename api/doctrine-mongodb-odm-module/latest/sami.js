
window.projectVersion = 'master';

(function(root) {

    var bhIndex = null;
    var rootPath = '';
    var treeHtml = '        <ul>                <li data-name="namespace:DoctrineMongoODMModule" class="opened">                    <div style="padding-left:0px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DoctrineMongoODMModule.html">DoctrineMongoODMModule</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:DoctrineMongoODMModule_Collector" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DoctrineMongoODMModule/Collector.html">Collector</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:DoctrineMongoODMModule_Collector_MongoLoggerCollector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Collector/MongoLoggerCollector.html">MongoLoggerCollector</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:DoctrineMongoODMModule_Logging" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DoctrineMongoODMModule/Logging.html">Logging</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:DoctrineMongoODMModule_Logging_DebugStack" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Logging/DebugStack.html">DebugStack</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Logging_EchoLogger" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Logging/EchoLogger.html">EchoLogger</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Logging_Logger" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Logging/Logger.html">Logger</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Logging_LoggerChain" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Logging/LoggerChain.html">LoggerChain</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:DoctrineMongoODMModule_Options" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DoctrineMongoODMModule/Options.html">Options</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:DoctrineMongoODMModule_Options_Configuration" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Options/Configuration.html">Configuration</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Options_Connection" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Options/Connection.html">Connection</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Options_DocumentManager" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Options/DocumentManager.html">DocumentManager</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Options_MongoLoggerCollector" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Options/MongoLoggerCollector.html">MongoLoggerCollector</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="namespace:DoctrineMongoODMModule_Paginator" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DoctrineMongoODMModule/Paginator.html">Paginator</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="namespace:DoctrineMongoODMModule_Paginator_Adapter" >                    <div style="padding-left:36px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DoctrineMongoODMModule/Paginator/Adapter.html">Adapter</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:DoctrineMongoODMModule_Paginator_Adapter_DoctrinePaginator" >                    <div style="padding-left:62px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Paginator/Adapter/DoctrinePaginator.html">DoctrinePaginator</a>                    </div>                </li>                </ul></div>                </li>                </ul></div>                </li>                            <li data-name="namespace:DoctrineMongoODMModule_Service" class="opened">                    <div style="padding-left:18px" class="hd">                        <span class="glyphicon glyphicon-play"></span><a href="DoctrineMongoODMModule/Service.html">Service</a>                    </div>                    <div class="bd">                                <ul>                <li data-name="class:DoctrineMongoODMModule_Service_ConfigurationFactory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Service/ConfigurationFactory.html">ConfigurationFactory</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Service_ConnectionFactory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Service/ConnectionFactory.html">ConnectionFactory</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Service_DoctrineObjectHydratorFactory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Service/DoctrineObjectHydratorFactory.html">DoctrineObjectHydratorFactory</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Service_DocumentManagerFactory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Service/DocumentManagerFactory.html">DocumentManagerFactory</a>                    </div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Service_MongoLoggerCollectorFactory" >                    <div style="padding-left:44px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html">MongoLoggerCollectorFactory</a>                    </div>                </li>                </ul></div>                </li>                            <li data-name="class:DoctrineMongoODMModule_Module" class="opened">                    <div style="padding-left:26px" class="hd leaf">                        <a href="DoctrineMongoODMModule/Module.html">Module</a>                    </div>                </li>                </ul></div>                </li>                </ul>';

    var searchTypeClasses = {
        'Namespace': 'label-default',
        'Class': 'label-info',
        'Interface': 'label-primary',
        'Trait': 'label-success',
        'Method': 'label-danger',
        '_': 'label-warning'
    };

    var searchIndex = [
                    
            {"type": "Namespace", "link": "DoctrineMongoODMModule.html", "name": "DoctrineMongoODMModule", "doc": "Namespace DoctrineMongoODMModule"},{"type": "Namespace", "link": "DoctrineMongoODMModule/Collector.html", "name": "DoctrineMongoODMModule\\Collector", "doc": "Namespace DoctrineMongoODMModule\\Collector"},{"type": "Namespace", "link": "DoctrineMongoODMModule/Logging.html", "name": "DoctrineMongoODMModule\\Logging", "doc": "Namespace DoctrineMongoODMModule\\Logging"},{"type": "Namespace", "link": "DoctrineMongoODMModule/Options.html", "name": "DoctrineMongoODMModule\\Options", "doc": "Namespace DoctrineMongoODMModule\\Options"},{"type": "Namespace", "link": "DoctrineMongoODMModule/Paginator.html", "name": "DoctrineMongoODMModule\\Paginator", "doc": "Namespace DoctrineMongoODMModule\\Paginator"},{"type": "Namespace", "link": "DoctrineMongoODMModule/Paginator/Adapter.html", "name": "DoctrineMongoODMModule\\Paginator\\Adapter", "doc": "Namespace DoctrineMongoODMModule\\Paginator\\Adapter"},{"type": "Namespace", "link": "DoctrineMongoODMModule/Service.html", "name": "DoctrineMongoODMModule\\Service", "doc": "Namespace DoctrineMongoODMModule\\Service"},
            {"type": "Interface", "fromName": "DoctrineMongoODMModule\\Logging", "fromLink": "DoctrineMongoODMModule/Logging.html", "link": "DoctrineMongoODMModule/Logging/Logger.html", "name": "DoctrineMongoODMModule\\Logging\\Logger", "doc": "&quot;Interface for loggers.&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Logging\\Logger", "fromLink": "DoctrineMongoODMModule/Logging/Logger.html", "link": "DoctrineMongoODMModule/Logging/Logger.html#method_log", "name": "DoctrineMongoODMModule\\Logging\\Logger::log", "doc": "&quot;Logs a SQL statement somewhere.&quot;"},
            
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Collector", "fromLink": "DoctrineMongoODMModule/Collector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "doc": "&quot;Collector to be used in ZendDeveloperTools to record and display Mongo\nqueries&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html#method___construct", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html#method_getName", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector::getName", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html#method_getPriority", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector::getPriority", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html#method_collect", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector::collect", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html#method_canHide", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector::canHide", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html#method_getQueryCount", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector::getQueryCount", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html#method_getQueries", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector::getQueries", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Collector/MongoLoggerCollector.html#method_getQueryTime", "name": "DoctrineMongoODMModule\\Collector\\MongoLoggerCollector::getQueryTime", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Logging", "fromLink": "DoctrineMongoODMModule/Logging.html", "link": "DoctrineMongoODMModule/Logging/DebugStack.html", "name": "DoctrineMongoODMModule\\Logging\\DebugStack", "doc": "&quot;Includes executed queries in a Debug Stack&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Logging\\DebugStack", "fromLink": "DoctrineMongoODMModule/Logging/DebugStack.html", "link": "DoctrineMongoODMModule/Logging/DebugStack.html#method_log", "name": "DoctrineMongoODMModule\\Logging\\DebugStack::log", "doc": "&quot;Logs a SQL statement somewhere.&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Logging", "fromLink": "DoctrineMongoODMModule/Logging.html", "link": "DoctrineMongoODMModule/Logging/EchoLogger.html", "name": "DoctrineMongoODMModule\\Logging\\EchoLogger", "doc": "&quot;A logger that logs to the standard output using echo\/var_dump.&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Logging\\EchoLogger", "fromLink": "DoctrineMongoODMModule/Logging/EchoLogger.html", "link": "DoctrineMongoODMModule/Logging/EchoLogger.html#method_log", "name": "DoctrineMongoODMModule\\Logging\\EchoLogger::log", "doc": "&quot;Logs a SQL statement somewhere.&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Logging", "fromLink": "DoctrineMongoODMModule/Logging.html", "link": "DoctrineMongoODMModule/Logging/Logger.html", "name": "DoctrineMongoODMModule\\Logging\\Logger", "doc": "&quot;Interface for loggers.&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Logging\\Logger", "fromLink": "DoctrineMongoODMModule/Logging/Logger.html", "link": "DoctrineMongoODMModule/Logging/Logger.html#method_log", "name": "DoctrineMongoODMModule\\Logging\\Logger::log", "doc": "&quot;Logs a SQL statement somewhere.&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Logging", "fromLink": "DoctrineMongoODMModule/Logging.html", "link": "DoctrineMongoODMModule/Logging/LoggerChain.html", "name": "DoctrineMongoODMModule\\Logging\\LoggerChain", "doc": "&quot;Chains multiple Logger&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Logging\\LoggerChain", "fromLink": "DoctrineMongoODMModule/Logging/LoggerChain.html", "link": "DoctrineMongoODMModule/Logging/LoggerChain.html#method_addLogger", "name": "DoctrineMongoODMModule\\Logging\\LoggerChain::addLogger", "doc": "&quot;Adds a logger in the chain&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Logging\\LoggerChain", "fromLink": "DoctrineMongoODMModule/Logging/LoggerChain.html", "link": "DoctrineMongoODMModule/Logging/LoggerChain.html#method_log", "name": "DoctrineMongoODMModule\\Logging\\LoggerChain::log", "doc": "&quot;Logs a SQL statement somewhere.&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule", "fromLink": "DoctrineMongoODMModule.html", "link": "DoctrineMongoODMModule/Module.html", "name": "DoctrineMongoODMModule\\Module", "doc": "&quot;Doctrine Module provider for Mongo DB ODM.&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Module", "fromLink": "DoctrineMongoODMModule/Module.html", "link": "DoctrineMongoODMModule/Module.html#method_init", "name": "DoctrineMongoODMModule\\Module::init", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Module", "fromLink": "DoctrineMongoODMModule/Module.html", "link": "DoctrineMongoODMModule/Module.html#method_onBootstrap", "name": "DoctrineMongoODMModule\\Module::onBootstrap", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Module", "fromLink": "DoctrineMongoODMModule/Module.html", "link": "DoctrineMongoODMModule/Module.html#method_loadCli", "name": "DoctrineMongoODMModule\\Module::loadCli", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Module", "fromLink": "DoctrineMongoODMModule/Module.html", "link": "DoctrineMongoODMModule/Module.html#method_getAutoloaderConfig", "name": "DoctrineMongoODMModule\\Module::getAutoloaderConfig", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Module", "fromLink": "DoctrineMongoODMModule/Module.html", "link": "DoctrineMongoODMModule/Module.html#method_getConfig", "name": "DoctrineMongoODMModule\\Module::getConfig", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Module", "fromLink": "DoctrineMongoODMModule/Module.html", "link": "DoctrineMongoODMModule/Module.html#method_getServiceConfig", "name": "DoctrineMongoODMModule\\Module::getServiceConfig", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Options", "fromLink": "DoctrineMongoODMModule/Options.html", "link": "DoctrineMongoODMModule/Options/Configuration.html", "name": "DoctrineMongoODMModule\\Options\\Configuration", "doc": "&quot;Configuration options for doctrine mongo&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setDriver", "name": "DoctrineMongoODMModule\\Options\\Configuration::setDriver", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getDriver", "name": "DoctrineMongoODMModule\\Options\\Configuration::getDriver", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setGenerateProxies", "name": "DoctrineMongoODMModule\\Options\\Configuration::setGenerateProxies", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getGenerateProxies", "name": "DoctrineMongoODMModule\\Options\\Configuration::getGenerateProxies", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setMetadataCache", "name": "DoctrineMongoODMModule\\Options\\Configuration::setMetadataCache", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getMetadataCache", "name": "DoctrineMongoODMModule\\Options\\Configuration::getMetadataCache", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setProxyDir", "name": "DoctrineMongoODMModule\\Options\\Configuration::setProxyDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getProxyDir", "name": "DoctrineMongoODMModule\\Options\\Configuration::getProxyDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setProxyNamespace", "name": "DoctrineMongoODMModule\\Options\\Configuration::setProxyNamespace", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getProxyNamespace", "name": "DoctrineMongoODMModule\\Options\\Configuration::getProxyNamespace", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getGenerateHydrators", "name": "DoctrineMongoODMModule\\Options\\Configuration::getGenerateHydrators", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setGenerateHydrators", "name": "DoctrineMongoODMModule\\Options\\Configuration::setGenerateHydrators", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getHydratorDir", "name": "DoctrineMongoODMModule\\Options\\Configuration::getHydratorDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setHydratorDir", "name": "DoctrineMongoODMModule\\Options\\Configuration::setHydratorDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getHydratorNamespace", "name": "DoctrineMongoODMModule\\Options\\Configuration::getHydratorNamespace", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setHydratorNamespace", "name": "DoctrineMongoODMModule\\Options\\Configuration::setHydratorNamespace", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getGeneratePersistentCollections", "name": "DoctrineMongoODMModule\\Options\\Configuration::getGeneratePersistentCollections", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setGeneratePersistentCollections", "name": "DoctrineMongoODMModule\\Options\\Configuration::setGeneratePersistentCollections", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getPersistentCollectionDir", "name": "DoctrineMongoODMModule\\Options\\Configuration::getPersistentCollectionDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setPersistentCollectionDir", "name": "DoctrineMongoODMModule\\Options\\Configuration::setPersistentCollectionDir", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getPersistentCollectionNamespace", "name": "DoctrineMongoODMModule\\Options\\Configuration::getPersistentCollectionNamespace", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setPersistentCollectionNamespace", "name": "DoctrineMongoODMModule\\Options\\Configuration::setPersistentCollectionNamespace", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getPersistentCollectionFactory", "name": "DoctrineMongoODMModule\\Options\\Configuration::getPersistentCollectionFactory", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setPersistentCollectionFactory", "name": "DoctrineMongoODMModule\\Options\\Configuration::setPersistentCollectionFactory", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getPersistentCollectionGenerator", "name": "DoctrineMongoODMModule\\Options\\Configuration::getPersistentCollectionGenerator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setPersistentCollectionGenerator", "name": "DoctrineMongoODMModule\\Options\\Configuration::setPersistentCollectionGenerator", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getDefaultDb", "name": "DoctrineMongoODMModule\\Options\\Configuration::getDefaultDb", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setDefaultDb", "name": "DoctrineMongoODMModule\\Options\\Configuration::setDefaultDb", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getFilters", "name": "DoctrineMongoODMModule\\Options\\Configuration::getFilters", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setFilters", "name": "DoctrineMongoODMModule\\Options\\Configuration::setFilters", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setLogger", "name": "DoctrineMongoODMModule\\Options\\Configuration::setLogger", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getLogger", "name": "DoctrineMongoODMModule\\Options\\Configuration::getLogger", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getClassMetadataFactoryName", "name": "DoctrineMongoODMModule\\Options\\Configuration::getClassMetadataFactoryName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setClassMetadataFactoryName", "name": "DoctrineMongoODMModule\\Options\\Configuration::setClassMetadataFactoryName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setRetryConnect", "name": "DoctrineMongoODMModule\\Options\\Configuration::setRetryConnect", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getRetryConnect", "name": "DoctrineMongoODMModule\\Options\\Configuration::getRetryConnect", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setRetryQuery", "name": "DoctrineMongoODMModule\\Options\\Configuration::setRetryQuery", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getRetryQuery", "name": "DoctrineMongoODMModule\\Options\\Configuration::getRetryQuery", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setTypes", "name": "DoctrineMongoODMModule\\Options\\Configuration::setTypes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getTypes", "name": "DoctrineMongoODMModule\\Options\\Configuration::getTypes", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_getRepositoryFactory", "name": "DoctrineMongoODMModule\\Options\\Configuration::getRepositoryFactory", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Configuration", "fromLink": "DoctrineMongoODMModule/Options/Configuration.html", "link": "DoctrineMongoODMModule/Options/Configuration.html#method_setRepositoryFactory", "name": "DoctrineMongoODMModule\\Options\\Configuration::setRepositoryFactory", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Options", "fromLink": "DoctrineMongoODMModule/Options.html", "link": "DoctrineMongoODMModule/Options/Connection.html", "name": "DoctrineMongoODMModule\\Options\\Connection", "doc": "&quot;Connection options for doctrine mongo&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_getServer", "name": "DoctrineMongoODMModule\\Options\\Connection::getServer", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_setServer", "name": "DoctrineMongoODMModule\\Options\\Connection::setServer", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_getPort", "name": "DoctrineMongoODMModule\\Options\\Connection::getPort", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_setPort", "name": "DoctrineMongoODMModule\\Options\\Connection::setPort", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_getUser", "name": "DoctrineMongoODMModule\\Options\\Connection::getUser", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_setUser", "name": "DoctrineMongoODMModule\\Options\\Connection::setUser", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_getPassword", "name": "DoctrineMongoODMModule\\Options\\Connection::getPassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_setPassword", "name": "DoctrineMongoODMModule\\Options\\Connection::setPassword", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_getDbname", "name": "DoctrineMongoODMModule\\Options\\Connection::getDbname", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_setDbname", "name": "DoctrineMongoODMModule\\Options\\Connection::setDbname", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_getConnectionString", "name": "DoctrineMongoODMModule\\Options\\Connection::getConnectionString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_setConnectionString", "name": "DoctrineMongoODMModule\\Options\\Connection::setConnectionString", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_getOptions", "name": "DoctrineMongoODMModule\\Options\\Connection::getOptions", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\Connection", "fromLink": "DoctrineMongoODMModule/Options/Connection.html", "link": "DoctrineMongoODMModule/Options/Connection.html#method_setOptions", "name": "DoctrineMongoODMModule\\Options\\Connection::setOptions", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Options", "fromLink": "DoctrineMongoODMModule/Options.html", "link": "DoctrineMongoODMModule/Options/DocumentManager.html", "name": "DoctrineMongoODMModule\\Options\\DocumentManager", "doc": "&quot;Document manager options for doctrine mongo&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\DocumentManager", "fromLink": "DoctrineMongoODMModule/Options/DocumentManager.html", "link": "DoctrineMongoODMModule/Options/DocumentManager.html#method_setConfiguration", "name": "DoctrineMongoODMModule\\Options\\DocumentManager::setConfiguration", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\DocumentManager", "fromLink": "DoctrineMongoODMModule/Options/DocumentManager.html", "link": "DoctrineMongoODMModule/Options/DocumentManager.html#method_getConfiguration", "name": "DoctrineMongoODMModule\\Options\\DocumentManager::getConfiguration", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\DocumentManager", "fromLink": "DoctrineMongoODMModule/Options/DocumentManager.html", "link": "DoctrineMongoODMModule/Options/DocumentManager.html#method_setConnection", "name": "DoctrineMongoODMModule\\Options\\DocumentManager::setConnection", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\DocumentManager", "fromLink": "DoctrineMongoODMModule/Options/DocumentManager.html", "link": "DoctrineMongoODMModule/Options/DocumentManager.html#method_getConnection", "name": "DoctrineMongoODMModule\\Options\\DocumentManager::getConnection", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\DocumentManager", "fromLink": "DoctrineMongoODMModule/Options/DocumentManager.html", "link": "DoctrineMongoODMModule/Options/DocumentManager.html#method_getEventManager", "name": "DoctrineMongoODMModule\\Options\\DocumentManager::getEventManager", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\DocumentManager", "fromLink": "DoctrineMongoODMModule/Options/DocumentManager.html", "link": "DoctrineMongoODMModule/Options/DocumentManager.html#method_setEventManager", "name": "DoctrineMongoODMModule\\Options\\DocumentManager::setEventManager", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Options", "fromLink": "DoctrineMongoODMModule/Options.html", "link": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html", "name": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector", "doc": "&quot;Configuration options for a collector&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html#method_setName", "name": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector::setName", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html#method_getName", "name": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector::getName", "doc": "&quot;Name of the collector&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html#method_setConfiguration", "name": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector::setConfiguration", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html#method_getConfiguration", "name": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector::getConfiguration", "doc": "&quot;Configuration service name (where to set the logger)&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html#method_setMongoLogger", "name": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector::setMongoLogger", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector", "fromLink": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html", "link": "DoctrineMongoODMModule/Options/MongoLoggerCollector.html#method_getMongoLogger", "name": "DoctrineMongoODMModule\\Options\\MongoLoggerCollector::getMongoLogger", "doc": "&quot;Logger service name&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Paginator\\Adapter", "fromLink": "DoctrineMongoODMModule/Paginator/Adapter.html", "link": "DoctrineMongoODMModule/Paginator/Adapter/DoctrinePaginator.html", "name": "DoctrineMongoODMModule\\Paginator\\Adapter\\DoctrinePaginator", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Paginator\\Adapter\\DoctrinePaginator", "fromLink": "DoctrineMongoODMModule/Paginator/Adapter/DoctrinePaginator.html", "link": "DoctrineMongoODMModule/Paginator/Adapter/DoctrinePaginator.html#method___construct", "name": "DoctrineMongoODMModule\\Paginator\\Adapter\\DoctrinePaginator::__construct", "doc": "&quot;Constructor&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Paginator\\Adapter\\DoctrinePaginator", "fromLink": "DoctrineMongoODMModule/Paginator/Adapter/DoctrinePaginator.html", "link": "DoctrineMongoODMModule/Paginator/Adapter/DoctrinePaginator.html#method_count", "name": "DoctrineMongoODMModule\\Paginator\\Adapter\\DoctrinePaginator::count", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Paginator\\Adapter\\DoctrinePaginator", "fromLink": "DoctrineMongoODMModule/Paginator/Adapter/DoctrinePaginator.html", "link": "DoctrineMongoODMModule/Paginator/Adapter/DoctrinePaginator.html#method_getItems", "name": "DoctrineMongoODMModule\\Paginator\\Adapter\\DoctrinePaginator::getItems", "doc": "&quot;{@inheritDoc}&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Service", "fromLink": "DoctrineMongoODMModule/Service.html", "link": "DoctrineMongoODMModule/Service/ConfigurationFactory.html", "name": "DoctrineMongoODMModule\\Service\\ConfigurationFactory", "doc": "&quot;Factory to create MongoDB configuration object.&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\ConfigurationFactory", "fromLink": "DoctrineMongoODMModule/Service/ConfigurationFactory.html", "link": "DoctrineMongoODMModule/Service/ConfigurationFactory.html#method___invoke", "name": "DoctrineMongoODMModule\\Service\\ConfigurationFactory::__invoke", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\ConfigurationFactory", "fromLink": "DoctrineMongoODMModule/Service/ConfigurationFactory.html", "link": "DoctrineMongoODMModule/Service/ConfigurationFactory.html#method_createService", "name": "DoctrineMongoODMModule\\Service\\ConfigurationFactory::createService", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\ConfigurationFactory", "fromLink": "DoctrineMongoODMModule/Service/ConfigurationFactory.html", "link": "DoctrineMongoODMModule/Service/ConfigurationFactory.html#method_getOptionsClass", "name": "DoctrineMongoODMModule\\Service\\ConfigurationFactory::getOptionsClass", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Service", "fromLink": "DoctrineMongoODMModule/Service.html", "link": "DoctrineMongoODMModule/Service/ConnectionFactory.html", "name": "DoctrineMongoODMModule\\Service\\ConnectionFactory", "doc": "&quot;Factory creates a mongo connection&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\ConnectionFactory", "fromLink": "DoctrineMongoODMModule/Service/ConnectionFactory.html", "link": "DoctrineMongoODMModule/Service/ConnectionFactory.html#method___invoke", "name": "DoctrineMongoODMModule\\Service\\ConnectionFactory::__invoke", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\ConnectionFactory", "fromLink": "DoctrineMongoODMModule/Service/ConnectionFactory.html", "link": "DoctrineMongoODMModule/Service/ConnectionFactory.html#method_createService", "name": "DoctrineMongoODMModule\\Service\\ConnectionFactory::createService", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\ConnectionFactory", "fromLink": "DoctrineMongoODMModule/Service/ConnectionFactory.html", "link": "DoctrineMongoODMModule/Service/ConnectionFactory.html#method_getOptionsClass", "name": "DoctrineMongoODMModule\\Service\\ConnectionFactory::getOptionsClass", "doc": "&quot;Get the class name of the options associated with this factory.&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Service", "fromLink": "DoctrineMongoODMModule/Service.html", "link": "DoctrineMongoODMModule/Service/DoctrineObjectHydratorFactory.html", "name": "DoctrineMongoODMModule\\Service\\DoctrineObjectHydratorFactory", "doc": "&quot;&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\DoctrineObjectHydratorFactory", "fromLink": "DoctrineMongoODMModule/Service/DoctrineObjectHydratorFactory.html", "link": "DoctrineMongoODMModule/Service/DoctrineObjectHydratorFactory.html#method___invoke", "name": "DoctrineMongoODMModule\\Service\\DoctrineObjectHydratorFactory::__invoke", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\DoctrineObjectHydratorFactory", "fromLink": "DoctrineMongoODMModule/Service/DoctrineObjectHydratorFactory.html", "link": "DoctrineMongoODMModule/Service/DoctrineObjectHydratorFactory.html#method_createService", "name": "DoctrineMongoODMModule\\Service\\DoctrineObjectHydratorFactory::createService", "doc": "&quot;&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Service", "fromLink": "DoctrineMongoODMModule/Service.html", "link": "DoctrineMongoODMModule/Service/DocumentManagerFactory.html", "name": "DoctrineMongoODMModule\\Service\\DocumentManagerFactory", "doc": "&quot;Factory creates a mongo document manager&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\DocumentManagerFactory", "fromLink": "DoctrineMongoODMModule/Service/DocumentManagerFactory.html", "link": "DoctrineMongoODMModule/Service/DocumentManagerFactory.html#method___invoke", "name": "DoctrineMongoODMModule\\Service\\DocumentManagerFactory::__invoke", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\DocumentManagerFactory", "fromLink": "DoctrineMongoODMModule/Service/DocumentManagerFactory.html", "link": "DoctrineMongoODMModule/Service/DocumentManagerFactory.html#method_createService", "name": "DoctrineMongoODMModule\\Service\\DocumentManagerFactory::createService", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\DocumentManagerFactory", "fromLink": "DoctrineMongoODMModule/Service/DocumentManagerFactory.html", "link": "DoctrineMongoODMModule/Service/DocumentManagerFactory.html#method_getOptionsClass", "name": "DoctrineMongoODMModule\\Service\\DocumentManagerFactory::getOptionsClass", "doc": "&quot;Get the class name of the options associated with this factory.&quot;"},
            
            {"type": "Class", "fromName": "DoctrineMongoODMModule\\Service", "fromLink": "DoctrineMongoODMModule/Service.html", "link": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html", "name": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory", "doc": "&quot;Mongo Logger Configuration ServiceManager factory&quot;"},
                                                        {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory", "fromLink": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html", "link": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html#method___construct", "name": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory::__construct", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory", "fromLink": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html", "link": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html#method___invoke", "name": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory::__invoke", "doc": "&quot;{@inheritDoc}&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory", "fromLink": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html", "link": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html#method_createService", "name": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory::createService", "doc": "&quot;&quot;"},
                    {"type": "Method", "fromName": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory", "fromLink": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html", "link": "DoctrineMongoODMModule/Service/MongoLoggerCollectorFactory.html#method_getOptionsClass", "name": "DoctrineMongoODMModule\\Service\\MongoLoggerCollectorFactory::getOptionsClass", "doc": "&quot;{@inheritDoc}&quot;"},
            
            
                                        // Fix trailing commas in the index
        {}
    ];

    /** Tokenizes strings by namespaces and functions */
    function tokenizer(term) {
        if (!term) {
            return [];
        }

        var tokens = [term];
        var meth = term.indexOf('::');

        // Split tokens into methods if "::" is found.
        if (meth > -1) {
            tokens.push(term.substr(meth + 2));
            term = term.substr(0, meth - 2);
        }

        // Split by namespace or fake namespace.
        if (term.indexOf('\\') > -1) {
            tokens = tokens.concat(term.split('\\'));
        } else if (term.indexOf('_') > 0) {
            tokens = tokens.concat(term.split('_'));
        }

        // Merge in splitting the string by case and return
        tokens = tokens.concat(term.match(/(([A-Z]?[^A-Z]*)|([a-z]?[^a-z]*))/g).slice(0,-1));

        return tokens;
    };

    root.Sami = {
        /**
         * Cleans the provided term. If no term is provided, then one is
         * grabbed from the query string "search" parameter.
         */
        cleanSearchTerm: function(term) {
            // Grab from the query string
            if (typeof term === 'undefined') {
                var name = 'search';
                var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
                var results = regex.exec(location.search);
                if (results === null) {
                    return null;
                }
                term = decodeURIComponent(results[1].replace(/\+/g, " "));
            }

            return term.replace(/<(?:.|\n)*?>/gm, '');
        },

        /** Searches through the index for a given term */
        search: function(term) {
            // Create a new search index if needed
            if (!bhIndex) {
                bhIndex = new Bloodhound({
                    limit: 500,
                    local: searchIndex,
                    datumTokenizer: function (d) {
                        return tokenizer(d.name);
                    },
                    queryTokenizer: Bloodhound.tokenizers.whitespace
                });
                bhIndex.initialize();
            }

            results = [];
            bhIndex.get(term, function(matches) {
                results = matches;
            });

            if (!rootPath) {
                return results;
            }

            // Fix the element links based on the current page depth.
            return $.map(results, function(ele) {
                if (ele.link.indexOf('..') > -1) {
                    return ele;
                }
                ele.link = rootPath + ele.link;
                if (ele.fromLink) {
                    ele.fromLink = rootPath + ele.fromLink;
                }
                return ele;
            });
        },

        /** Get a search class for a specific type */
        getSearchClass: function(type) {
            return searchTypeClasses[type] || searchTypeClasses['_'];
        },

        /** Add the left-nav tree to the site */
        injectApiTree: function(ele) {
            ele.html(treeHtml);
        }
    };

    $(function() {
        // Modify the HTML to work correctly based on the current depth
        rootPath = $('body').attr('data-root-path');
        treeHtml = treeHtml.replace(/href="/g, 'href="' + rootPath);
        Sami.injectApiTree($('#api-tree'));
    });

    return root.Sami;
})(window);

$(function() {

    // Enable the version switcher
    $('#version-switcher').change(function() {
        window.location = $(this).val()
    });

    
        // Toggle left-nav divs on click
        $('#api-tree .hd span').click(function() {
            $(this).parent().parent().toggleClass('opened');
        });

        // Expand the parent namespaces of the current page.
        var expected = $('body').attr('data-name');

        if (expected) {
            // Open the currently selected node and its parents.
            var container = $('#api-tree');
            var node = $('#api-tree li[data-name="' + expected + '"]');
            // Node might not be found when simulating namespaces
            if (node.length > 0) {
                node.addClass('active').addClass('opened');
                node.parents('li').addClass('opened');
                var scrollPos = node.offset().top - container.offset().top + container.scrollTop();
                // Position the item nearer to the top of the screen.
                scrollPos -= 200;
                container.scrollTop(scrollPos);
            }
        }

    
    
        var form = $('#search-form .typeahead');
        form.typeahead({
            hint: true,
            highlight: true,
            minLength: 1
        }, {
            name: 'search',
            displayKey: 'name',
            source: function (q, cb) {
                cb(Sami.search(q));
            }
        });

        // The selection is direct-linked when the user selects a suggestion.
        form.on('typeahead:selected', function(e, suggestion) {
            window.location = suggestion.link;
        });

        // The form is submitted when the user hits enter.
        form.keypress(function (e) {
            if (e.which == 13) {
                $('#search-form').submit();
                return true;
            }
        });

    
});


