<?php

defined('TYPO3') or die();

if (\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::isLoaded('iconpack')) {
    $extConf = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
        \TYPO3\CMS\Core\Configuration\ExtensionConfiguration::class
    )->get('iconpack_fontawesome');

    \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(
        \Quellenform\Iconpack\IconpackRegistry::class
    )->registerIconpack(
        'EXT:iconpack_fontawesome/Configuration/Iconpack/FontAwesome' . $extConf['version'] . '.yaml',
        $extConf['configFile'],
        intval($extConf['version']) !== 4
            ? \Quellenform\IconpackFontawesome\Configuration\IconpackFontawesomeConfiguration::class
            : null
    );
}
