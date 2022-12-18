<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'Iconpack: Font Awesome Icons',
    'description' => 'This Extension registers an Iconpack-Provider for EXT:iconpack which allows you to use the "Font Awesome Icons" in TYPO3.',
    'category' => 'fe',
    'state' => 'beta',
    'clearcacheonload' => true,
    'author' => 'Stephan Kellermayr',
    'author_email' => 'typo3@quellenform.at',
    'author_company' => 'Kellermayr KG',
    'version' => '0.2.1',
    'constraints' => [
        'depends' => [
            'typo3' => '10.4.11-11.5.99',
            'iconpack' => '0.2.0-0.2.99'
        ],
        'conflicts' => [],
        'suggests' => []
    ],
    'autoload' => [
        'psr-4' => ['Quellenform\\IconpackFontawesome\\' => 'Classes']
    ]
];
