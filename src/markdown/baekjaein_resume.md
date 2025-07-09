# 백재인

## **Contact**

**Email:** baek2506@gmail.com

**Phone:** 010-2506-6635

**Blog:** [https://velog.io/@baekjaein](https://velog.io/@baekjaein/posts)

## Introduce

안녕하세요, 저는 시스템 모니터링과 운영 자동화를 기반으로 커리어를 확장해가고 있는 6년차 엔지니어 백재인입니다.

서버, 네트워크, 개발, 보안 등 IT의 여러 분야에 걸친 배경 지식을 바탕으로, 보안 담당자, 개발자, 엔지니어 등 다양한 전문가들과의 협업을 통해 유연한 소통 능력을 발휘해왔습니다. 또한 부족한 부분은 신속하게 학습하여 업무에 적용함으로써 지속적인 성장을 추구하고 있습니다. 이런 과정을 통해 저는 제가 좋아하고 잘 할 수 있는 일을 찾아내고, 그 분야에서 더욱 전문성을 발휘할 수 있도록 노력하고 있습니다.

최근에는 개발과 운영의 경계를 줄이는 일에 관심을 가지고, 반복되는 작업을 자동화하고 배포 과정을 효율화하는 흐름 속에서 더 넓은 역할을 수행하고자 노력하고 있습니다.
단순한 운영을 넘어, 더 나은 개발 환경과 지속 가능한 시스템 구조를 만들어가는 일에 보람을 느끼고 있습니다.

## Skills

### 🔧 Infrastructure

- AWS
- Azure
- GCP
- Linux
- Network

### ⚙️ DevOps

- Kubernetes
- Jenkins
- ArgoCD
- Github

### 🔎 Monitoring

- Splunk
- Prometheus
- Grafana

### 📝 Language

- Javascript
    - React
    - Vue.js
- Python
- Bash Script
- PCRE

## Experience

**리눅스데이타시스템 / Splunk 엔지니어 / 책임 (2018.10 - 재직 중)**

- Multi-Site Indexer / Search Head Cluster 아키텍처 설계 및 구축 (3TB+/day)
- Splunk Enterprise Security 구축 및 시나리오 개발
- FW, WAF 등 보안 장비의 로그 수집 파이프라인 운영 및 모니터링 체계 유지
- 장애 대응을 위한 경고 시스템 구성 및 사후조치 시나리오 작성
- 사내 개발팀을 위한 Jenkins 기반 빌드 파이프라인 구성
- GitHub Actions를 활용한 브랜치/태그 기반 자동 빌드 파이프라인 구성
- ArgoCD를 통한 서비스 배포 자동화 및 Helm 차트 릴리즈 관리

## Project

- **사내 / 내부 개발자 플랫폼 구성** (2025.01 ~ )
    - 개발 생산성 향상을 위한 CI/CD 및 GitOps 플랫폼 설계 및 초기 구축 주도
    - Jenkins, GitHub Actions, ArgoCD, Helm을 활용한 배포 자동화 체계 정립
    - Kubernetes 기반 서비스의 Helm 차트 템플릿화 및 공통 배포 구조 표준화
    - 배포 흐름, 테스트 전략, 이슈 대응 방식 등을 문서화하여 팀 내 기술 기준 수립
    - Private 환경에서 Kubespray를 활용한 Kubernetes 클러스터 구성
- **사내 / Splunk IoT 중계 서버 테스트 환경 운영** (2025.01 ~ 2025.04)
    - Splunk ↔ IoT 장비 중계 프로그램 테스트를 위한 Azure VM, k3s 이용한 환경 구축
    - Harbor 기반의 Private 저장소 구성
    - Nginx Ingress 및 Azure DNS zone 서비스 이용한 테스트 서비스 노출
- **KB 헬스케어 / Splunk 구축 및 운영** (2022.01 ~ 2022.07)
    - Azure VM Infrastructure 기반의 Splunk Cluster 구축
    - Private Link를 활용한 다중 Azure Virtual Network 기반의 Splunk Cluster 구성
    - 애플리케이션 운영 데이터(MongoDB, Mysql, CosmosDB 등) 수집 및 분석
    - Splunk Ramdisk(ramfs, tmpfs)적용을 위한 성능 비교 및 분석
    - Dashboard Studio, Classic Dashboard를 활용한 대시보드 개발
- **삼성전자 / Splunk 통합 운영지원** (2022.07 ~ 2022.11)
    - Splunk REST API 이용한 Splunk 정보 통합 관리(라이센스 사용량 등)
    - AWS Lambda와 SQS를 활용한 S3 버킷 데이터 수집
    - Google Cloud BigQuery 데이터 연동
- **사이버사령부 / 국방 SIEM 체계 운영지원** (2023.01 ~ )
    - Kubernetes 기반의 애플리케이션 로그 수집 장애 현상 개선
    - 보안취약점 조치 대응
    - 운영 인력을 위한 사용자 교육 진행 (연 4회)
- **사이버사령부 / 국방 SIEM 체계 구축** (2019.02 ~ 2019.12)
    - 대규모 Multi-Site Indexer / Search Head Cluster 아키텍처 설계 및 구축 (3TB/day)
    - SIEM 구축을 위한 다양한 보안 장비(Fw, IPS, WAF, DDoS 등)의 로그 수집(3,000대+)
    - 이기종 서버(Linux, Windows, AIX, HPUX 등)의 로그를 수집하기 위한 Agent 설치 스크립트(Bash, Batch 등) 개발
    - 수집된 로그의 효율적 활용을 위한 Inventory 구축 및 필드추출, CIM 등의 전처리 작업
- **예탁결제원 / Splunk 고도화, 운영지원** (2023.07 ~ 2023.09)
    - 애플리케이션 운영 장애 대응을 위한 경고 메일 발송 시스템 구성
    - 재구축 프로젝트 위한 레거시 시스템 인벤토리화
    - 대시보드 고도화를 통한 검색 성능 개선
- **뮤직카우 / Splunk 구축 프로젝트** (2022.09 ~ 2022.10)
    - Indexer / Search Head Cluster 아키텍처 설계 및 구축
    - 데이터 전처리 및 CIM 작업
    - 대시보드 개발
- **방위사업청 / MIMS 성능개량 프로젝트 Splunk 구축** (2020.01 ~ 2021.12)
    - Indexer Cluster 아키텍처 구성 및 구축 (500GB/day)
    - Splunk Enterprise Security 구축
    - 수집 중요도에 따른 수집 대상 최적화로 라이센스 사용량 절감(50% 이상)
    - 시스템 사용 로그 및 보안 로그 처리 시스템 구축
    - 대시보드 개발
    

## Education / Military service

- 세명컴퓨터고등학교 / 스마트보안솔루션 / 졸업 (2016.03.02 ~ 2019.01.03)
- 산업기능요원 / 현역 / 전역 (2021.01.11 ~ 2023.11.10)

## Certificate / **Awards**

- Splunk Accredited Sales Rep I, II (2019. 01)
- 정보기기운용기능사 (2018.06)
- 정보처리기능사 (2017.11)
- Splunk Korea Partner BOSS Of The SOC(개인) 2025 2nd place
- Splunk Korea Partner BOSS Of The SOC(Team) 2024 3rd place