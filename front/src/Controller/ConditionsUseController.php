<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ConditionsUseController extends AbstractController
{
    /**
     * @Route("/conditions/use", name="conditions")
     */
    public function index(): Response
    {
        return $this->render('conditions_use/index.html.twig', [
            'controller_name' => 'ConditionsUseController',
        ]);
    }
}
